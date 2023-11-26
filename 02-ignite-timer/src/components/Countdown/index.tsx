import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../../pages/home'

export function CountDown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = Math.floor(currentSeconds % 60)

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer | ${minutes}:${seconds}`
    } else {
      document.title = `Ignite Timer`
    }
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished])

  return (
    <div className="text-[10rem] text-gray_color-100 flex gap-4 font-mono">
      <span className="bg-gray_color-600 px-4 rounded-lg">{minutes[0]}</span>
      <span className="bg-gray_color-600 px-4 rounded-lg">{minutes[1]}</span>
      <span className="text-green_color-500">:</span>
      <span className="bg-gray_color-600 px-4 rounded-lg">{seconds[0]}</span>
      <span className="bg-gray_color-600 px-4 rounded-lg">{seconds[1]}</span>
    </div>
  )
}
