import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    return produce(state, (draft) => {
      draft.cycles.push(action.payload.newCycle)
      draft.activeCycleId = action.payload.newCycle.id
    })
  }

  if (action.type === ActionTypes.INTERRUPT_CURRENT_CYCLE) {
    const interruptCurrentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId
    })

    if (interruptCurrentCycleIndex < 0) {
      return state
    }

    return produce(state, (draft) => {
      draft.activeCycleId = null
      draft.cycles[interruptCurrentCycleIndex].interruptedDate = new Date()
    })
  }

  if (action.type === ActionTypes.MARK_CURRENT_CYCLE_FINISHED) {
    const markCurrentCyclesFinishedIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId
    })

    if (markCurrentCyclesFinishedIndex < 0) {
      return state
    }

    return produce(state, (draft) => {
      draft.activeCycleId = null
      draft.cycles[markCurrentCyclesFinishedIndex].interruptedDate = new Date()
    })
  }

  return state
}
