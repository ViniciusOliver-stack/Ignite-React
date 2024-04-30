import { Transaction } from "@/interfaces/transactions"
import create from "zustand"

interface TransactionStore {
  transactions: Transaction[]
  loadTransactions: () => Promise<void>
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  loadTransactions: async () => {
    try {
      const response = await fetch("http://localhost:3333/transactions")
      const data = await response.json()
      set({ transactions: data })
    } catch (error) {
      console.error("Error loading transactions:", error)
    }
  },
}))
