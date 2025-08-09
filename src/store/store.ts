import { create } from "zustand";
import type { TimerState } from "../types";
import { persist } from "zustand/middleware";

export const useTypeStore = create<TimerState>()(persist(
  (set) => ({
    gameStarted: false,
    setGameStarted: (gameStarted) => set({ gameStarted }),
    gameFinished: false,
    setGameFinished: (gameFinished) => set({ gameFinished }),
    score: 0,
    setScore: (score) => set({ score})
  }),
  {
    name: "typesprint-store",
    partialize: (state) => ({score: state.score}),
  }
));