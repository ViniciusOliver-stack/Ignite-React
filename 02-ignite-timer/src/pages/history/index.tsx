import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  console.log(cycles)

  return (
    <main className="flex-1 md:p-14 flex flex-col">
      <h1 className="text-2xl text-gray_color-100">Meu histórico</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm rounded-tl-md pl-4">
                Tarefa
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm">
                Duração
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm">
                Início
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm rounded-tr-md pr-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
                    {cycle.task}
                  </td>
                  <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
                    {cycle.minutesAmount} minutos
                  </td>
                  <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
                    {cycle.startDate.toISOString()}
                  </td>
                  <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
                    {cycle.finishedDate && (
                      <span className="before:bg-green_color-500 before:content-[''] before:block before:h-2 before:w-2 before:rounded-full flex items-center gap-4">
                        Concluído
                      </span>
                    )}

                    {cycle.interruptedDate && (
                      <span className="before:bg-red-400 before:content-[''] before:block before:h-2 before:w-2 before:rounded-full flex items-center gap-4">
                        Interrompido
                      </span>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <span className="before:bg-yellow-400 before:content-[''] before:block before:h-2 before:w-2 before:rounded-full flex items-center gap-4">
                        Em andamento
                      </span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
