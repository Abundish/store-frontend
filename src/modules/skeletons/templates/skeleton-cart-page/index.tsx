import repeat from "@lib/util/repeat"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

const SkeletonCartPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F6EE]">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-16 gap-y-10">

          {/* Left */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-end justify-between mb-2">
              <div className="w-40 h-9 bg-[#D8E8D0] rounded animate-pulse" />
              <div className="w-12 h-3 bg-[#D8E8D0] rounded animate-pulse" />
            </div>
            {/* Col labels */}
            <div className="w-full h-px bg-[#D8E8D0]" />
            {/* Items */}
            <div className="flex flex-col divide-y divide-[#D8E8D0]">
              {repeat(3).map((i) => (
                <SkeletonLineItem key={i} />
              ))}
            </div>
          </div>

          {/* Right — summary skeleton */}
          <div className="bg-white rounded-[20px] border border-[#D8E8D0] px-6 py-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="w-24 h-6 bg-[#D8E8D0] rounded animate-pulse" />
              <div className="w-6 h-0.5 bg-[#FFCC00] rounded animate-pulse" />
            </div>
            <div className="w-full h-8 bg-[#EEF3EC] rounded-[10px] animate-pulse" />
            <div className="w-full h-px bg-[#D8E8D0]" />
            <div className="flex flex-col gap-3">
              {repeat(3).map((i) => (
                <div key={i} className="flex justify-between">
                  <div className="w-24 h-3 bg-[#D8E8D0] rounded animate-pulse" />
                  <div className="w-16 h-3 bg-[#D8E8D0] rounded animate-pulse" />
                </div>
              ))}
              <div className="w-full h-px bg-[#D8E8D0] mt-1" />
              <div className="flex justify-between">
                <div className="w-16 h-5 bg-[#D8E8D0] rounded animate-pulse" />
                <div className="w-20 h-5 bg-[#D8E8D0] rounded animate-pulse" />
              </div>
            </div>
            <div className="w-full h-px bg-[#D8E8D0]" />
            <div className="w-full h-[52px] bg-[#D8E8D0] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage