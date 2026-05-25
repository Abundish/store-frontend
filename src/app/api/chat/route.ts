import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

interface GeminiRequest {
  system_instruction: { parts: { text: string }[] };
  contents: ChatMessage[];
  generationConfig: {
    temperature: number;
    maxOutputTokens: number;
  };
  safetySettings: { category: string; threshold: string }[];
}

const RATE_LIMIT = {
  MAX_REQUESTS: 10,
  WINDOW_MS: 60_000,
};

const ipMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT.WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT.MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

setInterval(() => {
  const cutoff = Date.now() - RATE_LIMIT.WINDOW_MS;
  ipMap.forEach((entry, ip) => {
    if (entry.windowStart < cutoff) ipMap.delete(ip);
  });
}, 5 * 60_000);

const ABUNDISH_SYSTEM_PROMPT = `
You are the Abundish virtual assistant — a friendly, concise helper for customers shopping on Abundish.info, Nigeria's premium farm-to-table produce e-commerce platform.

## Who you are
- Speak warmly but get to the point fast. No filler phrases like "Great question!" or "Certainly!".
- Keep replies short (1–4 sentences for most questions). Use bullet points only when listing 3+ items.
- If you don't know something or it's outside your scope, say so and direct the customer to support@abundish.info.
- Never make up information. Never speculate about prices, stock levels, or delivery times beyond what's stated here.

## About Abundish
Abundish is a Nigerian farm-to-table produce platform that connects customers directly with local farms for fresh, high-quality fruits, vegetables, grains, and staple groceries. All produce is sourced from vetted Nigerian farms and delivered to customers' doors.

## Products
- Fresh vegetables and leafy greens
- Herbs and spices
- Legumes
- Starchy Foods
- Blended Section
- Tubers
- Nuts & Seeds
- Protein
- Snacks
- Fruits
- Combos
- Fresh Pour drinks
- Oils
- Oils & Seeds
- Sweetners

## Ordering
- Browse products on the Abundish website and add to cart.
- Create an account or check out as a guest.
- Orders can be tracked from your account dashboard under "My Orders".

## Payment
- We accept payment via Paystack (debit cards, bank transfer, USSD, and bank cards).
- Payment is made securely at checkout. Your card details are never stored on our servers.
- All prices are in Nigerian Naira (₦).

## Delivery
- We currently deliver within Lagos State.
- Delivery fees are calculated based on your distance from our fulfillment center — you'll see the exact fee at checkout before you pay.
- Estimated delivery time: Same-day delivery if order is placed before 5pm otherwise, order is delivered the next day

## Returns & Refunds
- If you receive damaged, spoiled, or incorrect items, contact us within 24 hours of delivery.
- Send photos of the affected items to support@abundish.info with your order number.
- Refunds are processed within 3–5 business days back to your original payment method.
- We do not accept returns of fresh produce unless the item was damaged on arrival.

## Contact & Support
- Email: support@abundish.info
- Response time: within 24 hours on business days
- For urgent issues, include your order number in the subject line.

## Hours of Operations
- Monday - Saturday: 9am-6pm
- Sunday: Closed

## Out of scope
For questions about: specific product availability, real-time stock, custom orders, wholesale, or anything not covered above — direct the customer to support@abundish.info.
`.trim();

// ---------------------------------------------------------------------------
// Gemini API call
// ---------------------------------------------------------------------------

const GEMINI_MODEL = "gemini-3.5-flash";
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

async function callGemini(history: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is not set");

  const body: GeminiRequest = {
    system_instruction: {
      parts: [{ text: ABUNDISH_SYSTEM_PROMPT }],
    },
    contents: history,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 300,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    ],
  };

  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // Abort if Gemini takes longer than 15s
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text: string | undefined =
    data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    // Gemini sometimes returns a blocked candidate with no text
    const reason = data?.candidates?.[0]?.finishReason;
    if (reason === "SAFETY") {
      return "I'm not able to help with that. For any questions, email support@abundish.info.";
    }
    throw new Error("Empty response from Gemini");
  }

  return text.trim();
}

// ---------------------------------------------------------------------------
// Input validation
// ---------------------------------------------------------------------------

function sanitize(text: string): string {
  return text.replace(/[<>]/g, "").slice(0, 500).trim();
}

function isValidHistory(history: unknown): history is { role: "user" | "model"; content: string }[] {
  if (!Array.isArray(history)) return false;
  if (history.length > 20) return false; // cap history depth
  return history.every(
    (m) =>
      typeof m === "object" &&
      m !== null &&
      (m.role === "user" || m.role === "model") &&
      typeof m.content === "string"
  );
}

export async function POST(req: NextRequest) {
  // Get IP for rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { history } = body as { history: unknown };

  if (!isValidHistory(history)) {
    return NextResponse.json({ error: "Invalid message history." }, { status: 400 });
  }

  if (history.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const last = history[history.length - 1];
  if (last.role !== "user") {
    return NextResponse.json({ error: "Last message must be from user." }, { status: 400 });
  }

  const geminiHistory: ChatMessage[] = history.map((m) => ({
    role: m.role,
    parts: [{ text: sanitize(m.content) }],
  }));
  try {
    const reply = await callGemini(geminiHistory);
    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    console.error("[Abundish chat]", err);
    return NextResponse.json(
      {
        error:
          "Our assistant is taking a break. Email support@abundish.info for help.",
      },
      { status: 500 }
    );
  }
}
