import { use, useEffect, useState } from "react";

const Text = () => {
  const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
    "sed", "do", "eiusmod", "tempor", "incididunt"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  

    const checkKey = (event: KeyboardEvent) => {
      const currentWord = words[currentWordIndex];
      if (event.key === " ") {

        if(userInput === currentWord){
          console.log('next word');
          setCurrentWordIndex((prev) => prev + 1)
          setUserInput("")
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
      <div className="flex gap-2">
        {
          words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className={`text-2xl font-bold
                ${wordIndex < currentWordIndex 
                    ? "text-sky-500" 
                    : "text-gray-300"}`}
            >
              {
                word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={`${wordIndex === currentWordIndex
                        ? userInput[charIndex] === char
                          ? "text-sky-500"
                          : userInput[charIndex] 
                            ? "text-red-500"
                            : "text-gray-300"
                        : ""
                    }`}
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