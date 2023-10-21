import { create } from 'zustand'

type stepType = {
  step: number
  addStep: (payload: number) => void
}

export const useStepStore = create<stepType>((set) => ({
  step: 0,
  addStep: (payload) => set(() => ({ step: payload })),
}))
