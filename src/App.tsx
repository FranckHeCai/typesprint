import Endgame from "./components/Endgame"
import Header from "./components/Header"
import Text from "./components/Text"
import Timer from "./components/Timer"
import { useTypeStore } from "./store/store"

function App() {
  const {gameFinished, gameStarted} = useTypeStore(state => state)
  return (
    <div className="bg-zinc-800 mx-auto container gap-5 flex flex-col items-center justify-center h-screen text-zinc-300">
      <Header />
      {/* { gameFinished 
        ? (<Endgame />)
        : (<Text />)
      } */}
      {gameFinished && !gameStarted ? <Endgame /> : <Timer />}
      <Text />
    </div>
  )
}

export default App
