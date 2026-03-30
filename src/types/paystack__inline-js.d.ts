declare module "@paystack/inline-js" {
    interface TransactionSuccess {
      reference: string
      trans: string
      status: string
      message: string
      transaction: string
      trxref: string
    }
  
    interface ResumeTransactionOptions {
      accessCode: string
      onSuccess?: (transaction: TransactionSuccess) => void
      onCancel?: () => void
      onError?: (error: unknown) => void
    }
  
    class PaystackPop {
      resumeTransaction(options: ResumeTransactionOptions): void
    }
  
    export default PaystackPop
  }