export interface Transaction {
  id: number
  description: string
  type: "income" | "outcome"
  price: number
  category: string
  created_at: string
}
