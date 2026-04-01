import LocalizedClientLink from "../localized-client-link"

type InteractiveLinkProps = {
  href: string
  children?: React.ReactNode
  onClick?: () => void
}

const InteractiveLink = ({
  href,
  children,
  onClick,
  ...props
}: InteractiveLinkProps) => {
  return (
    <LocalizedClientLink
      className="inline-flex items-center gap-1.5 font-dm-sans font-semibold text-[#008528] hover:text-[#006b2f] group transition-colors duration-150"
      href={href}
      onClick={onClick}
      {...props}
    >
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M3 11L11 3M11 3H5M11 3v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </LocalizedClientLink>
  )
}

export default InteractiveLink