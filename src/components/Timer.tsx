import { useEffect, useState } from "react";
import { useTypeStore } from "../store/store";

const Timer = () => {
  const [time, setTime] = useState(60)
  const {gameStarted, setGameStarted} = useTypeStore(state => state)

  useEffect(()=>{
    if (gameStarted) {
      const timer = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setGameStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer)
    }
  },[gameStarted])

  return (
    <div>
      <h2 className="text-center text-3xl text-zinc-300">{time}</h2>
      {/* <button onClick={()=>{setIsRunning(!isRunning)}} className="bg-sky-500 p-2 rounded">Start</button> */}
    </div>
  );
};

export default Timer;