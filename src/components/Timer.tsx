import { useEffect, useState } from "react";
import { useTypeStore } from "../store/store";

const Timer = () => {
  const [time, setTime] = useState(60)
  const {gameStarted, setGameStarted, setGameFinished} = useTypeStore(state => state)

  useEffect(()=>{

    if (gameStarted) {
      setGameFinished(false)
      const timer = setInterval(() => {
        setTime(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer)
    }
  },[gameStarted])

  useEffect(() => {
    if (time === 0) {
      setGameFinished(true)
      setGameStarted(false)
    }
  }, [time, setGameFinished, setGameStarted]);

  return (
    <div>
      <h2 className="text-center text-5xl text-zinc-300">{time}</h2>
      {/* <button onClick={()=>{setIsRunning(!isRunning)}} className="bg-sky-500 p-2 rounded">Start</button> */}
    </div>
  );
};

export default Timer;