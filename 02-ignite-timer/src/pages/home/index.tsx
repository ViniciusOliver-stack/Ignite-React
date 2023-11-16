import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod.coerce
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  const isSubmitDisabled = !isValid

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = currentSeconds / 60
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <div className="flex items-center justify-center gap-2 text-gray_color-100 text-lg font-bold flex-wrap w-full">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            type="text"
            id="task"
            className="bg-transparent h-10 border-b-2 border-b-gray_color-500 font-bold text-lg px-2 placeholder:text-gray_color-500 flex-1 focus:outline-none focus:border-b-green_color-500"
            placeholder="Dê um nome para o seu projeto"
            list="task-list"
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
            {...register('minutesAmount')}
          />

          <span>minutos.</span>
        </div>

        <div className="text-[10rem] text-gray_color-100 flex gap-4 font-mono">
          <span className="bg-gray_color-600 px-4 rounded-lg">
            {minutes[0]}
          </span>
          <span className="bg-gray_color-600 px-4 rounded-lg">
            {minutes[1]}
          </span>
          <span className="text-green_color-500">:</span>
          <span className="bg-gray_color-600 px-4 rounded-lg">
            {seconds[0]}
          </span>
          <span className="bg-gray_color-600 px-4 rounded-lg">
            {seconds[1]}
          </span>
        </div>

        <button
          type="submit"
          className="w-full p-4 rounded-lg flex items-center justify-center gap-2 text-bold cursor-pointer bg-green_color-500 text-gray_color-100 hover:bg-green_color-700 transition-all duration-150 disabled:bg-green_color-500/30 disabled:cursor-not-allowed disabled:text-gray_color-500"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </div>
  )
}
