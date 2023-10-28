import { useState } from 'react'

export function History() {
  const [colorStatus, setColorStatus] = useState('Concluído')

  const getStatusColor = () => {
    switch (colorStatus) {
      case 'Concluído':
        return 'bg-green-500'
      case 'Em andamento':
        return 'bg-yellow-500'
      case 'Cancelado':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const handleChangeStatus = (novoStatus: string) => {
    setColorStatus(novoStatus)
  }

  return (
    <main className="flex-1 md:p-14 flex flex-col">
      <h1 className="text-2xl text-gray_color-100">Meu histórico</h1>

      <button onClick={() => handleChangeStatus('Concluído')}>Concluído</button>
      <button onClick={() => handleChangeStatus('Em andamento')}>
        Em Andamento
      </button>
      <button onClick={() => handleChangeStatus('Cancelado')}>Cancelado</button>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm rounded-t-md pl-4">
                Tarefa
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm">
                Duração
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm">
                Início
              </th>
              <th className="bg-gray_color-600 p-4 text-left text-gray_color-100 text-sm rounded-t-md pr-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Conserto de débitos técnicos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              25 minutos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Há cerca de 2 meses
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              <span
                className={`before:${getStatusColor()} before:content-[''] before:block before:h-2 before:w-2 before:rounded-lg flex items-center gap-2`}
              >
                {colorStatus}
              </span>
            </td>
          </tbody>

          <tbody>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Conserto de débitos técnicos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              25 minutos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Há cerca de 2 meses
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              <span
                className={`before:${getStatusColor()} before:content-[''] before:block before:h-2 before:w-2 before:rounded-lg flex items-center gap-2`}
              >
                {colorStatus}
              </span>
            </td>
          </tbody>

          <tbody>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Conserto de débitos técnicos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              25 minutos
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              Há cerca de 2 meses
            </td>
            <td className="bg-gray_color-600 border-t-4 border-gray_color-700 p-4 text-sm">
              <span
                className={`before:${getStatusColor()} before:content-[''] before:block before:h-2 before:w-2 before:rounded-lg flex items-center gap-2`}
              >
                {colorStatus}
              </span>
            </td>
          </tbody>
        </table>
      </div>
    </main>
  )
}
