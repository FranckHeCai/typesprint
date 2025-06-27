import Text from "./components/Text"

function App() {
  return (
    <div className=" ">
        <div className="bg-zinc-800 mx-auto container flex flex-col items-center justify-center h-screen">
          <img className="w-50 h-auto absolute top-5 left-1/2 -translate-x-1/2" src="/logo.png" alt="typesprint logo" />
          <Text />
        </div>
    </div>
  )
}

export default App
