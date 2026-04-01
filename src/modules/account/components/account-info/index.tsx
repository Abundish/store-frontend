import { Disclosure } from "@headlessui/react"
import { clx } from "@medusajs/ui"
import { useEffect } from "react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { useFormStatus } from "react-dom"

type AccountInfoProps = {
  label: string
  currentInfo: string | React.ReactNode
  isSuccess?: boolean
  isError?: boolean
  errorMessage?: string
  clearState: () => void
  children?: React.ReactNode
  "data-testid"?: string
}

const AccountInfo = ({
  label,
  currentInfo,
  isSuccess,
  isError,
  clearState,
  errorMessage = "An error occurred, please try again",
  children,
  "data-testid": dataTestid,
}: AccountInfoProps) => {
  const { state, close, toggle } = useToggleState()
  const { pending } = useFormStatus()

  const handleToggle = () => {
    clearState()
    setTimeout(() => toggle(), 100)
  }

  useEffect(() => {
    if (isSuccess) close()
  }, [isSuccess, close])

  return (
    <div
      className="bg-white rounded-[16px] border border-[#D8E8D0] px-5 py-4"
      data-testid={dataTestid}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5 min-w-0">
          <p className="font-dm-mono text-[#7A9B7A] text-[10px] uppercase tracking-[0.12em]">
            {label}
          </p>
          <div className="font-dm-sans text-[#1A3B1A] text-[15px] truncate" data-testid="current-info">
            {currentInfo}
          </div>
        </div>

        <button
          type={state ? "reset" : "button"}
          onClick={handleToggle}
          data-testid="edit-button"
          data-active={state}
          className={clx(
            "shrink-0 h-[32px] px-4 rounded-full font-dm-sans text-[12px] font-semibold border transition-all duration-150",
            state
              ? "border-[#D8E8D0] text-[#7A9B7A] hover:border-[#cc4400] hover:text-[#cc4400]"
              : "border-[#C8DEC2] text-[#3D5A3D] hover:border-[#008528] hover:text-[#008528]"
          )}
        >
          {state ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* Success toast */}
      <Disclosure>
        <Disclosure.Panel
          static
          className={clx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            isSuccess ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          )}
          data-testid="success-message"
        >
          <div className="flex items-center gap-2 mt-3 bg-[#EEF3EC] border border-[#C8DEC2] rounded-[10px] px-3 py-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" fill="#008528" />
              <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-dm-sans text-[#006b2f] text-[13px]">
              {label} updated successfully
            </span>
          </div>
        </Disclosure.Panel>
      </Disclosure>

      {/* Error toast */}
      <Disclosure>
        <Disclosure.Panel
          static
          className={clx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
            isError ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          )}
          data-testid="error-message"
        >
          <div className="flex items-center gap-2 mt-3 bg-[#FFF4F0] border border-[#FACCBA] rounded-[10px] px-3 py-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" fill="#cc4400" />
              <path d="M7 4v4M7 9.5v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="font-dm-sans text-[#cc4400] text-[13px]">
              {errorMessage}
            </span>
          </div>
        </Disclosure.Panel>
      </Disclosure>

      {/* Edit form */}
      <Disclosure>
        <Disclosure.Panel
          static
          className={clx(
            "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
            state ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 mt-3 border-t border-[#EEF3EC]">
            {children}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={pending}
                data-testid="save-button"
                className="h-[40px] px-6 rounded-full bg-[#006b2f] text-white font-dm-sans font-semibold text-[13px] hover:bg-[#008528] active:scale-[0.98] transition-all duration-150 disabled:opacity-50 flex items-center gap-2"
              >
                {pending ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Saving…
                  </>
                ) : "Save changes"}
              </button>
            </div>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}

export default AccountInfo