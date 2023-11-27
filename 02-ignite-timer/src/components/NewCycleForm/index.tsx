import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="flex items-center justify-center gap-2 text-gray_color-100 text-lg font-bold flex-wrap w-full">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        type="text"
        id="task"
        className="bg-transparent h-10 border-b-2 border-b-gray_color-500 font-bold text-lg px-2 placeholder:text-gray_color-500 flex-1 focus:outline-none focus:border-b-green_color-500"
        placeholder="Dê um nome para o seu projeto"
        list="task-list"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-list" className="p-2">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <input
        type="number"
        id="minutesAmount"
        className="bg-transparent h-10 border-b-2 border-b-gray_color-500 font-bold text-lg px-2 placeholder:text-gray_color-500 w-16 focus:outline-none focus:border-b-green_color-500"
        placeholder="00"
        disabled={!!activeCycle}
        {...register('minutesAmount')}
      />

      <span>minutos.</span>
    </div>
  )
}
