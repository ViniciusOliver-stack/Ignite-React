import { useState } from "react"
import * as zod from "zod"
import { useForm } from "react-hook-form"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "../ui/button"

import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react"

const newTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
})

type NewTransactionFromInputs = zod.infer<typeof newTransactionSchema>

export function Header() {
  const [typeTransaction, setTypeTransaction] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFromInputs>()

  const handleSubmitNewTransaction = async (data: NewTransactionFromInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

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
                <form
                  className="pt-8 flex flex-col gap-4"
                  onSubmit={handleSubmit(handleSubmitNewTransaction)}
                >
                  <input
                    {...register("description")}
                    type="text"
                    placeholder="Descrição"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    {...register("price", { valueAsNumber: true })} //Estamos convertendo para uma number
                    type="number"
                    placeholder="Valor"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />
                  <input
                    {...register("category")}
                    type="text"
                    placeholder="Categoria"
                    className="w-full rounded-md bg-gray-900 p-4 gray-300 placeholder:text-gray-500 focus:outline-none"
                  />

                  <ul className="grid w-full gap-6 md:grid-cols-2">
                    <li>
                      <input
                        type="checkbox"
                        name="typeTransaction"
                        id="entrada"
                        value=""
                        className="hidden peer"
                        checked={typeTransaction === "entrada"}
                        onChange={() => setTypeTransaction("entrada")}
                      />
                      <label
                        htmlFor="entrada"
                        className="inline-flex items-center gap-2 w-full p-5 border border-neutral-600 text-gray-500  rounded-lg cursor-pointer   peer-checked:bg-green-500 hover:text-white peer-checked:text-white hover:bg-green-500"
                      >
                        <ArrowCircleUp size={24} />
                        Entrada
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="typeTransaction"
                        id="saida"
                        value=""
                        className="hidden peer"
                        checked={typeTransaction === "saida"}
                        onChange={() => setTypeTransaction("saida")}
                      />
                      <label
                        htmlFor="saida"
                        className="inline-flex items-center gap-2 w-full p-5 border border-neutral-600 text-gray-500  rounded-lg cursor-pointer   peer-checked:bg-red-500 hover:text-white peer-checked:text-white hover:bg-red-500"
                      >
                        <ArrowCircleDown size={24} />
                        Saída
                      </label>
                    </li>
                  </ul>

                  <button
                    className="h-[58px] border-none bg-green-700 py-3 rounded-md mt-6 cursor-pointer hover:bg-green-800 hover:text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
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

// interface NewTransactionProps {
//   transactionType: "income" | "outcome"
//   children: React.ReactNode
// }

// function ButtonNewTransaction({
//   transactionType,
//   children,
// }: NewTransactionProps) {
//   return (
//     <RadioGroup defaultValue="option-one">
//       <div className="flex items-center space-x-2">
//         <RadioGroupItem value="option-one" id="option-one" className="hidden" />
//         <Label htmlFor="option-one">
//           <ArrowCircleUp size={24} />
//           Entrada
//         </Label>
//       </div>
//       <div className="flex items-center space-x-2">
//         <RadioGroupItem value="option-two" id="option-two" className="hidden" />
//         <Label htmlFor="option-two">
//           <ArrowCircleDown size={24} />
//           Saída
//         </Label>
//       </div>
//     </RadioGroup>
//   )
// }
