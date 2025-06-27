import {useEffect, useState } from "react";
import Timer from "./Timer";
import { useTypeStore } from "../store/store";

const Text = () => {
  const words = [
    "hola", "me", "llamo", "que", "tal", "como", "estas", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const {gameStarted, setGameStarted, setScore} = useTypeStore(state => state)
  let {score} = useTypeStore(state => state)
  const regex = /[a-zA-Z]/

    const checkKey = (event: KeyboardEvent) => {
      const currentWord = words[currentWordIndex];
      if(!gameStarted && event.key.length === 1 && regex.test(event.key)) {
        setGameStarted(true)
      }
      if (event.key === " ") {

        if(userInput === currentWord){
          console.log('next word');
          setCurrentWordIndex((prev) => prev + 1)
          setUserInput("")
          setScore(score++)
        }
        event.preventDefault();
        return;
      }
      if (event.key === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1))
        return
      }
      if (event.key.length === 1 && userInput.length < currentWord.length) {
        setUserInput((prev) => prev + event.key);
      }
    }

    useEffect(() =>{
      window.addEventListener("keydown", checkKey);

      return () => {
        window.removeEventListener("keydown", checkKey);
      };  
    },[userInput, currentWordIndex])
  
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Timer />
      <div className="flex justify-center flex-wrap gap-2">
        { words.length > 0 &&
          words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={`text-2xl font-bold relative
                ${wordIndex < currentWordIndex 
                    ? "text-sky-500" 
                    : "text-zinc-300"}`}
            >
              {
                word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={`${wordIndex === currentWordIndex
                        ? userInput[charIndex] === char
                          ? "text-sky-500"
                          : userInput[charIndex] 
                            ? "text-red-400"
                            : "text-zinc-300"
                        : ""
                    } transition-all duration-100`}
                  >
                    {char}
                  </span>
                ))
              }
            </span>
          ))
        }
      </div>
    </div>
  );
};

export default Text;