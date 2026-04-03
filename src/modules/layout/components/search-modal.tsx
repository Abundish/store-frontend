"use client"

import { searchProducts, SearchProduct } from "@lib/search"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState, useTransition } from "react"
import Image from "next/image"
import { Search, X, Loader2 } from "lucide-react"

export default function SearchModal({ onClose }: { onClose: () => void }) {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchProduct[]>([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [isPending, startTransition] = useTransition()
    const inputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const { countryCode } = useParams() as { countryCode: string }

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [onClose])

    // Debounced search
    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            setIsEmpty(false)
            return
        }
        const timer = setTimeout(() => {
            startTransition(async () => {
                const hits = await searchProducts(query)
                setResults(hits)
                setIsEmpty(hits.length === 0)
            })
        }, 250)
        return () => clearTimeout(timer)
    }, [query])

    const handleSelect = (handle: string) => {
        onClose()
        router.push(`/${countryCode}/products/${handle}`)
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[60] bg-[#1A3B1A]/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-[61] w-full max-w-[600px] px-4">
                <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden">
                    {/* Input row */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EEF3EC]">
                        <Search size={18} className="text-[#7A9B7A] shrink-0" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for fruits, vegetables…"
                            className="flex-1 font-dm-sans text-[15px] text-[#1A3B1A] placeholder:text-[#B5CEB5] bg-transparent outline-none"
                        />
                        {isPending ? (
                            <Loader2 size={16} className="text-[#7A9B7A] animate-spin shrink-0" />
                        ) : query ? (
                            <button
                                onClick={() => setQuery("")}
                                className="text-[#7A9B7A] hover:text-[#1A3B1A] transition-colors shrink-0"
                            >
                                <X size={16} />
                            </button>
                        ) : null}
                    </div>

                    {/* Results */}
                    {results.length > 0 && (
                        <ul className="py-2 max-h-[420px] overflow-y-auto">
                            {results.map((product) => (
                                <li key={product.id}>
                                    <button
                                        onClick={() => handleSelect(product.handle)}
                                        className="w-full flex items-center gap-4 px-5 py-3 hover:bg-[#F5FAF3] transition-colors duration-150 text-left"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-12 h-12 rounded-[10px] bg-[#EEF3EC] overflow-hidden shrink-0 relative">
                                            {product.thumbnail ? (
                                                <Image
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="48px"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M3 15l4-6 3 4 2-3 4 5H3z" fill="#C8DEC2" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text */}
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="font-fraunces text-[15px] text-[#1A3B1A] truncate">
                                                {product.title}
                                            </span>
                                            {product.collection_title && (
                                                <span className="font-dm-mono text-[11px] text-[#7A9B7A] uppercase tracking-wide truncate">
                                                    {product.collection_title}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Empty state */}
                    {isEmpty && (
                        <div className="flex flex-col items-center gap-2 py-10">
                            <p className="font-fraunces text-[#1A3B1A] text-[18px]">No results</p>
                            <p className="font-dm-sans text-[#7A9B7A] text-[14px]">
                                Try a different name or browse the store
                            </p>
                        </div>
                    )}

                    {/* Idle state */}
                    {!query && (
                        <div className="px-5 py-4">
                            <p className="font-dm-mono text-[#B5CEB5] text-[12px] uppercase tracking-wide">
                                Start typing to search
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}