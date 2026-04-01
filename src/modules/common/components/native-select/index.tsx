import {
  SelectHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { clx } from "@medusajs/ui"

export type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & SelectHTMLAttributes<HTMLSelectElement>

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { placeholder = "Select...", defaultValue, className, children, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const [isPlaceholder, setIsPlaceholder] = useState(false)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    useEffect(() => {
      if (innerRef.current && innerRef.current.value === "") {
        setIsPlaceholder(true)
      } else {
        setIsPlaceholder(false)
      }
    }, [innerRef.current?.value])

    return (
      <div className="relative">
        <select
          ref={innerRef}
          defaultValue={defaultValue}
          {...props}
          className={clx(
            "w-full appearance-none font-dm-sans text-[14px] text-[#1A3B1A] bg-white border border-[#C8DEC2] rounded-[10px] px-4 py-3 pr-10",
            "hover:border-[#008528] focus:border-[#006b2f] focus:outline-none transition-colors duration-150",
            isPlaceholder && "text-[#7A9B7A]",
            className
          )}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {children}
        </select>
        {/* Chevron */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A9B7A]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    )
  }
)

NativeSelect.displayName = "NativeSelect"

export default NativeSelect