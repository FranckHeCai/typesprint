import Endgame from "./components/Endgame"
import Header from "./components/Header"
import Text from "./components/Text"
import Timer from "./components/Timer"
import { useTypeStore } from "./store/store"

function App() {
  const {gameFinished, gameStarted, score} = useTypeStore(state => state)
  return (
    <div className="mx-auto container gap-10 flex flex-col items-center justify-center h-screen text-zinc-300">
      <Header />
      <div className={`${gameFinished ? "opacity-100" : "opacity-0"} transition-opacity duration-100 pointer-events-none`}>
        <Endgame />
      </div>
      <div className="min-h-[60px] flex flex-col items-center justify-center">
        {gameStarted ? <Timer /> : <h2 className="text-center text-3xl text-zinc-500">Type to start</h2>}
      </div>
      <Text />
      <h2 className={`${!gameStarted ? "opacity-100" : "opacity-0"} text-2xl text-zinc-500 transition-opacity duration-100`}>Highest score : {score} WPM</h2>
      
    </div>
  )
}

export default App
