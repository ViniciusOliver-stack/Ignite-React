import { Button } from "../ui/button"

export function Header() {
  return (
    <>
      <div className="bg-gray-900 pt-10 pb-28">
        <div className="w-full max-w-[1120px] m-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/src/assets/logo.svg" alt="" />
            <span className="text-2xl text-white font-bold">DT Money</span>
          </div>

          <Button className="bg-green-600 text-white font-bold py-5 hover:bg-green-700">
            Nova transação
          </Button>
        </div>
      </div>
    </>
  )
}
