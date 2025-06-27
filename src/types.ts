export interface TimerState {
  gameStarted: boolean
  setGameStarted: (gameStarted: boolean) => void
  score: number
  setScore: (score: number) => void
}