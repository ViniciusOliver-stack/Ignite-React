import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"

export function Summary() {
  return (
    <section className="w-full max-w-[1120px] m-auto py-6 grid grid-cols-3 gap-8 -mt-24">
      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong className="block mt-4 text-2xl text-white">R$ 17.400,00</strong>
      </div>

      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong className="block mt-4 text-2xl text-white">R$ 17.400,00</strong>
      </div>

      <div className="bg-gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong className="block mt-4 text-2xl text-white">R$ 17.400,00</strong>
      </div>
    </section>
  )
}
