import Endgame from "./components/Endgame"
import Header from "./components/Header"
import Text from "./components/Text"
import { useTypeStore } from "./store/store"

function App() {
  const {gameFinished} = useTypeStore(state => state)
  return (
    <div className="bg-zinc-800 mx-auto container flex flex-col items-center justify-center h-screen">
      <Header />
      { gameFinished 
        ? (<Endgame />)
        : (<Text />)
      }
      
    </div>
  )
}

export default App
