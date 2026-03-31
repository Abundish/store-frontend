import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  if (!images?.length) {
    return (
      <div className="w-full aspect-square rounded-[20px] bg-[#EEF3EC] flex items-center justify-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="12" fill="#D4E6CE" />
          <path d="M16 48l14-20 10 14 6-8 10 14H16z" fill="#7AAD6E" opacity="0.5" />
          <circle cx="42" cy="22" r="6" fill="#7AAD6E" opacity="0.5" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {images.map((image, index) => (
        <div
          key={image.id}
          id={image.id}
          className={`relative w-full overflow-hidden rounded-[20px] bg-[#EEF3EC] ${
            index === 0 ? "aspect-[4/5]" : "aspect-square"
          }`}
        >
          {image.url && (
            <Image
              src={image.url}
              priority={index === 0}
              alt={`Product image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageGallery