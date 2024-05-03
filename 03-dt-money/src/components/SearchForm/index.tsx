import { zodResolver } from "@hookform/resolvers/zod"
import { MagnifyingGlass } from "phosphor-react"
import { useForm } from "react-hook-form"
import * as zod from "zod"

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <form
      className="flex gap-4"
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        id="query"
        className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:gray-500"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button
        className="flex gap-1 items-center p-4 bg-gray-900 border-green-300 text-green-300 font-bold rounded-md hover:bg-green-700 hover:border-green-500 hover:text-white transition-all delay-150 disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
