import { Header } from "@/components/Header"
import { SearchForm } from "@/components/SearchForm"
import { Summary } from "@/components/Summary"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <div className="w-full max-w-[1120px] my-16 m-auto px-6">
        <SearchForm />
        <table className="w-full border-separate border-spacing-y-2 text-white mt-10">
          <tbody>
            <tr>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-l-md">
                Desenvolvimento de site
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">
                <PriceHighLight variant="income">R$ 509,90</PriceHighLight>
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">Venda</td>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-r-md">
                15/04/2022
              </td>
            </tr>

            <tr>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-l-md">
                Desenvolvimento de plataforma
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">
                <PriceHighLight variant="income">R$ 12.000,90</PriceHighLight>
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">Venda</td>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-r-md">
                15/04/2022
              </td>
            </tr>

            <tr>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-l-md">
                Plano do Canva
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">
                <PriceHighLight variant="outcome">R$ - 59,90</PriceHighLight>
              </td>
              <td className="w-[50%] px-5 py-8 bg-gray-700">Venda</td>
              <td className="w-[50%] px-5 py-8 bg-gray-700 rounded-r-md">
                15/04/2022
              </td>
            </tr>
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
