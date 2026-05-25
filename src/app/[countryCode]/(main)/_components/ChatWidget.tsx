"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Role = "user" | "model" | "system";

interface Message {
    id: string;
    role: Role;
    content: string;
    ts: number;
}

const WELCOME_MESSAGE: Message = {
    id: "welcome",
    role: "model",
    content:
        "Hi there 👋 I'm the Abundish assistant. Ask me about our products, delivery, payments, or returns.",
    ts: Date.now(),
};

const SUGGESTIONS = [
    "Where do you deliver?",
    "How does payment work?",
    "What's your return policy?",
    "How do I track my order?",
];


function uid() {
    return Math.random().toString(36).slice(2, 9);
}

function formatTime(ts: number) {
    return new Date(ts).toLocaleTimeString("en-NG", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function TypingDots() {
    return (
        <span style={{ display: "inline-flex", gap: 3, alignItems: "center", padding: "2px 0" }}>
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#008528",
                        display: "inline-block",
                        animation: "abundish-bounce 1.2s ease-in-out infinite",
                        animationDelay: `${i * 0.2}s`,
                    }}
                />
            ))}
        </span>
    );
}

interface BubbleProps {
    msg: Message;
}

function Bubble({ msg }: BubbleProps) {
    const isUser = msg.role === "user";
    const isSystem = msg.role === "system";

    if (isSystem) {
        return (
            <div
                style={{
                    textAlign: "center",
                    fontSize: 11,
                    color: "#888",
                    fontFamily: "'DM Sans', sans-serif",
                    padding: "4px 0",
                }}
            >
                {msg.content}
            </div>
        );
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: isUser ? "flex-end" : "flex-start",
                gap: 3,
            }}
        >
            {!isUser && (
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #006b2f, #008528)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <LeafIcon size={12} color="#FFCC00" />
                    </div>
                    <span
                        style={{
                            fontSize: 10,
                            fontFamily: "'DM Mono', monospace",
                            color: "#008528",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                        }}
                    >
                        Abundish
                    </span>
                </div>
            )}

            <div
                style={{
                    maxWidth: "84%",
                    padding: "10px 14px",
                    borderRadius: isUser ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                    backgroundColor: isUser ? "#006b2f" : "#F4F1E8",
                    color: isUser ? "#fff" : "#1a1a1a",
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    fontFamily: "'DM Sans', sans-serif",
                    wordBreak: "break-word",
                    border: isUser ? "none" : "1px solid #e2ddd0",
                    // Subtle harvest-gold accent on bot bubble top border
                    borderTop: isUser ? "none" : "2px solid #FFCC00",
                }}
            >
                {msg.content}
            </div>

            <span
                style={{
                    fontSize: 10,
                    color: "#aaa",
                    fontFamily: "'DM Mono', monospace",
                    paddingRight: isUser ? 2 : 0,
                    paddingLeft: isUser ? 0 : 2,
                }}
            >
                {formatTime(msg.ts)}
            </span>
        </div>
    );
}

function LeafIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.93V17h2v-.07c3.39-.49 6-3.39 6-6.93h-2c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.54 2.61 6.44 6 6.93z"
                fill={color}
            />
            <path
                d="M12 6c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"
                fill={color}
                opacity="0.6"
            />
        </svg>
    );
}

function ChevronDownIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SendIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function SpinnerIcon() {
    return (
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden
            style={{ animation: "abundish-spin 0.8s linear infinite" }}
        >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [unread, setUnread] = useState(0);

    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    // Focus input when opening
    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 120);
            setUnread(0);
        }
    }, [open]);

    const sendMessage = useCallback(
        async (text: string) => {
            const trimmed = text.trim();
            if (!trimmed || loading) return;

            setInput("");
            setError(null);
            setShowSuggestions(false);

            const userMsg: Message = {
                id: uid(),
                role: "user",
                content: trimmed,
                ts: Date.now(),
            };

            setMessages((prev) => [...prev, userMsg]);
            setLoading(true);

            // Build history for API (exclude welcome message, only user+model roles)
            const history = [...messages, userMsg]
                .filter((m) => m.role === "user" || m.role === "model")
                .filter((m) => m.id !== "welcome")
                .map((m) => ({ role: m.role as "user" | "model", content: m.content }));

            // Always include the user message even if history was empty
            const apiHistory =
                history.length === 0
                    ? [{ role: "user" as const, content: trimmed }]
                    : history;

            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ history: apiHistory }),
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error ?? "Something went wrong.");
                }

                const botMsg: Message = {
                    id: uid(),
                    role: "model",
                    content: data.reply,
                    ts: Date.now(),
                };

                setMessages((prev) => [...prev, botMsg]);

                if (!open) setUnread((n) => n + 1);
            } catch (err) {
                const msg =
                    err instanceof Error ? err.message : "Couldn't reach the assistant.";
                setError(msg);
                setMessages((prev) => [
                    ...prev,
                    {
                        id: uid(),
                        role: "system",
                        content: msg,
                        ts: Date.now(),
                    },
                ]);
            } finally {
                setLoading(false);
            }
        },
        [loading, messages, open]
    );

    const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage(input);
        }
    };

    return (
        <>
            {/* Keyframes injected once */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');

        @keyframes abundish-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @keyframes abundish-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes abundish-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes abundish-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @keyframes abundish-badge {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
        .abundish-chat-panel {
          animation: abundish-slide-up 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .abundish-fab:hover {
          transform: scale(1.06);
          box-shadow: 0 6px 24px rgba(0,107,47,0.45) !important;
        }
        .abundish-fab:active {
          transform: scale(0.96);
        }
        .abundish-send:hover:not(:disabled) {
          background: #008528 !important;
        }
        .abundish-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .abundish-suggestion:hover {
          background: #006b2f !important;
          color: #fff !important;
          border-color: #006b2f !important;
        }
        .abundish-input:focus {
          outline: none;
          border-color: #008528 !important;
          box-shadow: 0 0 0 3px rgba(0,133,40,0.12);
        }
        /* Scrollbar styling */
        .abundish-messages::-webkit-scrollbar { width: 4px; }
        .abundish-messages::-webkit-scrollbar-track { background: transparent; }
        .abundish-messages::-webkit-scrollbar-thumb { background: #d4cfbe; border-radius: 2px; }
      `}</style>

            {/* Chat panel */}
            {open && (
                <div
                    className="abundish-chat-panel"
                    style={{
                        position: "fixed",
                        bottom: 88,
                        right: 24,
                        width: 360,
                        maxWidth: "calc(100vw - 32px)",
                        height: 540,
                        maxHeight: "calc(100vh - 110px)",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                        zIndex: 9998,
                        border: "1px solid rgba(0,107,47,0.14)",
                        backgroundColor: "#FAFAF7",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background: "linear-gradient(135deg, #006b2f 0%, #005124 100%)",
                            padding: "16px 18px",
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            flexShrink: 0,
                        }}
                    >
                        {/* Brand mark */}
                        <div
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: 10,
                                background: "rgba(255,204,0,0.15)",
                                border: "1px solid rgba(255,204,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <LeafIcon size={20} color="#FFCC00" />
                        </div>

                        <div style={{ flex: 1 }}>
                            <div
                                style={{
                                    fontFamily: "'Fraunces', serif",
                                    fontWeight: 600,
                                    fontSize: 15,
                                    color: "#F9F6EE",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 1.2,
                                }}
                            >
                                Abundish Assistant
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5,
                                    marginTop: 2,
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        backgroundColor: "#4ade80",
                                        display: "inline-block",
                                        boxShadow: "0 0 0 2px rgba(74,222,128,0.3)",
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: 10,
                                        color: "rgba(249,246,238,0.65)",
                                        letterSpacing: "0.05em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Online
                                </span>
                            </div>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                border: "none",
                                borderRadius: 8,
                                width: 30,
                                height: 30,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "rgba(249,246,238,0.7)",
                                flexShrink: 0,
                                transition: "background 0.15s",
                            }}
                        >
                            <ChevronDownIcon size={16} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        className="abundish-messages"
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "16px 16px 8px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 14,
                        }}
                    >
                        {messages.map((msg) => (
                            <Bubble key={msg.id} msg={msg} />
                        ))}

                        {/* Typing indicator */}
                        {loading && (
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <div
                                    style={{
                                        width: 22,
                                        height: 22,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #006b2f, #008528)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <LeafIcon size={12} color="#FFCC00" />
                                </div>
                                <div
                                    style={{
                                        padding: "10px 14px",
                                        borderRadius: "4px 18px 18px 18px",
                                        backgroundColor: "#F4F1E8",
                                        border: "1px solid #e2ddd0",
                                        borderTop: "2px solid #FFCC00",
                                        display: "inline-flex",
                                    }}
                                >
                                    <TypingDots />
                                </div>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && !loading && (
                        <div
                            style={{
                                padding: "0 16px 12px",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 6,
                                flexShrink: 0,
                            }}
                        >
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    className="abundish-suggestion"
                                    onClick={() => sendMessage(s)}
                                    style={{
                                        padding: "5px 11px",
                                        borderRadius: 20,
                                        border: "1px solid #c8c3b0",
                                        background: "transparent",
                                        color: "#444",
                                        fontSize: 11.5,
                                        fontFamily: "'DM Sans', sans-serif",
                                        cursor: "pointer",
                                        transition: "all 0.15s",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input area */}
                    <div
                        style={{
                            padding: "10px 14px 14px",
                            borderTop: "1px solid #e8e4d8",
                            background: "#F9F6EE",
                            flexShrink: 0,
                        }}
                    >
                        {error && (
                            <div
                                style={{
                                    fontSize: 11,
                                    color: "#b45309",
                                    fontFamily: "'DM Sans', sans-serif",
                                    marginBottom: 6,
                                    padding: "4px 8px",
                                    background: "#fef3c7",
                                    borderRadius: 6,
                                    border: "1px solid #fde68a",
                                }}
                            >
                                {error}
                            </div>
                        )}

                        <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                            <textarea
                                ref={inputRef}
                                className="abundish-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                placeholder="Ask about products, delivery..."
                                rows={1}
                                disabled={loading}
                                style={{
                                    flex: 1,
                                    resize: "none",
                                    border: "1.5px solid #d4cfbe",
                                    borderRadius: 12,
                                    padding: "9px 12px",
                                    fontSize: 13.5,
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#1a1a1a",
                                    backgroundColor: "#fff",
                                    lineHeight: 1.5,
                                    transition: "border-color 0.15s, box-shadow 0.15s",
                                    maxHeight: 96,
                                    overflowY: "auto",
                                }}
                            />

                            <button
                                className="abundish-send"
                                onClick={() => sendMessage(input)}
                                disabled={!input.trim() || loading}
                                aria-label="Send message"
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 11,
                                    backgroundColor: "#006b2f",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    color: "#fff",
                                    transition: "background 0.15s, transform 0.1s",
                                    flexShrink: 0,
                                }}
                            >
                                {loading ? <SpinnerIcon /> : <SendIcon size={15} />}
                            </button>
                        </div>

                        <div
                            style={{
                                textAlign: "center",
                                marginTop: 8,
                                fontSize: 10,
                                fontFamily: "'DM Mono', monospace",
                                color: "#aaa",
                                letterSpacing: "0.03em",
                            }}
                        >
                            Powered by Abundish · AI can make mistakes
                        </div>
                    </div>
                </div>
            )}

            {/* FAB trigger */}
            <button
                className="abundish-fab"
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Close chat" : "Open Abundish chat assistant"}
                style={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #006b2f 0%, #008528 100%)",
                    border: "none",
                    boxShadow: "0 4px 18px rgba(0,107,47,0.4)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    transition: "transform 0.15s, box-shadow 0.15s",
                }}
            >
                {open ? (
                    <ChevronDownIcon size={22} />
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            stroke="#F9F6EE"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                        <circle cx="9" cy="10" r="1" fill="#FFCC00" />
                        <circle cx="12" cy="10" r="1" fill="#FFCC00" />
                        <circle cx="15" cy="10" r="1" fill="#FFCC00" />
                    </svg>
                )}

                {/* Unread badge */}
                {!open && unread > 0 && (
                    <span
                        style={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            backgroundColor: "#FFCC00",
                            color: "#006b2f",
                            fontSize: 10,
                            fontWeight: 700,
                            fontFamily: "'DM Mono', monospace",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            animation: "abundish-badge 0.2s ease-out",
                            border: "2px solid #fff",
                        }}
                    >
                        {unread > 9 ? "9+" : unread}
                    </span>
                )}
            </button>
        </>
    );
}