import { create } from "zustand";
import type { TimerState } from "../types";

export const useTypeStore = create<TimerState>((set) => ({
  gameStarted: false,
  setGameStarted: (gameStarted) => set({ gameStarted }),
  gameFinished: false,
  setGameFinished: (gameFinished) => set({ gameFinished }),
  score: 0,
  setScore: (score) => set({ score})
}));