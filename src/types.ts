export interface TimerState {
  gameStarted: boolean
  setGameStarted: (gameStarted: boolean) => void
  gameFinished: boolean
  setGameFinished: (gameFinished: boolean) => void
  score: number
  setScore: (score: number) => void
}

export type Quote = {
  anime: string
  character: string
  quote: string
}