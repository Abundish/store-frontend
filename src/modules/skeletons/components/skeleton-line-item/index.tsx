const SkeletonLineItem = () => {
  return (
    <div className="grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 py-5 items-center border-b border-[#D8E8D0] last:border-b-0">
      <div className="w-[88px] h-[88px] rounded-[12px] bg-[#D8E8D0] animate-pulse" />
      <div className="flex flex-col gap-2">
        <div className="w-36 h-4 bg-[#D8E8D0] rounded animate-pulse" />
        <div className="w-20 h-3 bg-[#D8E8D0] rounded animate-pulse" />
        <div className="w-12 h-3 bg-[#D8E8D0] rounded animate-pulse mt-1" />
      </div>
      <div className="flex justify-center">
        <div className="w-20 h-7 bg-[#D8E8D0] rounded-full animate-pulse" />
      </div>
      <div className="flex justify-end">
        <div className="w-14 h-4 bg-[#D8E8D0] rounded animate-pulse" />
      </div>
      <div className="flex justify-end">
        <div className="w-14 h-4 bg-[#D8E8D0] rounded animate-pulse" />
      </div>
    </div>
  )
}

export default SkeletonLineItem