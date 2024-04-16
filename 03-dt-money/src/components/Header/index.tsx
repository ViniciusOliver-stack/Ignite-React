import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react"

export function Header() {
  return (
    <>
      <div className="bg-gray-900 pt-10 pb-28">
        <div className="w-full max-w-[1120px] m-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/src/assets/logo.svg" alt="" />
            <span className="text-2xl text-white font-bold">DT Money</span>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 text-white font-bold py-5 hover:bg-green-700">
                Nova transação
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#202024] text-white border-none">
              <DialogHeader className="">
                <DialogTitle>Nova transação</DialogTitle>
                <form className="pt-8 flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Descrição"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Valor"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Categoria"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <ButtonNewTransaction transactionType="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </ButtonNewTransaction>
                    <ButtonNewTransaction transactionType="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </ButtonNewTransaction>
                  </div>

                  <button className="h-[58px] border-none bg-green-700 py-3 rounded-md mt-6 cursor-pointer hover:bg-green-800 hover:text-white transition-all">
                    Cadastrar
                  </button>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

interface NewTransactionProps {
  transactionType: "income" | "outcome"
  children: React.ReactNode
}

function ButtonNewTransaction({
  transactionType,
  children,
}: NewTransactionProps) {
  return (
    <Button
      className={`bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-none text-gray-300 ${
        transactionType === "income"
          ? "hover:bg-green-500 hover:text-white"
          : "hover:bg-red-500 hover:text-white"
      }`}
    >
      {children}
    </Button>
  )
}
