import { Header } from "@/components/Header"
import { SearchForm } from "@/components/SearchForm"
import { Summary } from "@/components/Summary"
import { dateFormatter, priceFormatter } from "@/lib/formatter"
import { useTransactionStore } from "@/store/TransactionsStore"
import { useEffect } from "react"

export function Transactions() {
  const { transactions, loadTransactions } = useTransactionStore()

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <div>
      <Header />
      <Summary />

      <div className="w-full max-w-[1120px] my-16 m-auto px-6">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 text-white mt-10">
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-l-md">
                    {transaction.description}
                  </td>
                  <td className="w-[50%] px-5 py-8 bg-gray-700">
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td className="w-[50%] px-5 py-8 bg-gray-700">
                    {transaction.category}
                  </td>
                  <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-r-md">
                    {dateFormatter.format(new Date(transaction.created_at))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface PriceHighLightProps {
  variant: "income" | "outcome"
  children: React.ReactNode
}

function PriceHighLight({ variant, children }: PriceHighLightProps) {
  return (
    <span
      className={`${variant === "income" ? "text-green-300" : "text-red-300"}`}
    >
      {children}
    </span>
  )
}
