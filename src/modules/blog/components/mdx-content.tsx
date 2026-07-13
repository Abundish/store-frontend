import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import type { ComponentPropsWithoutRef } from "react"

type MdxContentProps = {
  source: string
}

function MdxImage({
  src,
  alt,
}: {
  src?: string
  alt?: string
}) {
  if (!src) {
    return null
  }

  return (
    <figure className="my-8">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[#F3F6F1]">
        <Image
          src={src}
          alt={alt || "Blog post image"}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      </div>
      {alt ? (
        <figcaption className="mt-3 font-dm-mono text-[11px] uppercase tracking-[0.12em] text-[#7A9B7A]">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  )
}

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-fraunces text-[#006b2f] text-[28px] lg:text-[32px] leading-[1.2] mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-fraunces text-[#1A3B1A] text-[22px] leading-[1.3] mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] mb-4"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] mb-4 list-disc pl-6 flex flex-col gap-2"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="font-dm-sans text-[#3D5A3D] text-[16px] leading-[1.8] mb-4 list-decimal pl-6 flex flex-col gap-2"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[#006b2f]" {...props} />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <MdxImage src={props.src} alt={props.alt} />
  ),
}

export default function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="blog-content">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  )
}
