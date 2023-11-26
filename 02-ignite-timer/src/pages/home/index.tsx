import { HandPalm, Play } from '@phosphor-icons/react'
import { createContext, useEffect, useState } from 'react'
import { NewCycleForm } from '../../components/NewCycleForm'
import { CountDown } from '../../components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextProps {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CycleContextProps)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const isSubmitDisabled = !isValid

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
      finishedDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center gap-14"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          <NewCycleForm />
          <CountDown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <button
            type="button"
            className="w-full p-4 rounded-lg flex items-center justify-center gap-2 text-bold cursor-pointer bg-red_color-500 text-gray_color-100 hover:bg-red_color-500/70 transition-all duration-150 disabled:bg-red_color-500/30 disabled:cursor-not-allowed disabled:text-gray_color-500"
            onClick={handleInterruptCycle}
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            type="submit"
            className="w-full p-4 rounded-lg flex items-center justify-center gap-2 text-bold cursor-pointer bg-green_color-500 text-gray_color-100 hover:bg-green_color-700 transition-all duration-150 disabled:bg-green_color-500/30 disabled:cursor-not-allowed disabled:text-gray_color-500"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </div>
  )
}
