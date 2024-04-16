import { MagnifyingGlass } from "phosphor-react"

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        type="text"
        name=""
        id=""
        className="flex-1 rounded-md border-none bg-gray-900 text-gray-300 p-4 placeholder:gray-500"
        placeholder="Busque por transações"
      ></input>
      <button
        className="flex gap-1 items-center p-4 bg-gray-900 border-green-300 text-green-300 font-bold rounded-md hover:bg-green-700 hover:border-green-500 hover:text-white transition-all delay-150"
        type="submit"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
