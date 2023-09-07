import { useState } from "react";
// icons
import { HiChevronUp } from "react-icons/hi";
import { HiChevronDoubleUp } from "react-icons/hi";
import { HiChevronDoubleDown } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiHashtag } from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";

export default function App() {
  const [num, setNum] = useState(0);
  let counts = num;
  // functions

  function handleIncrement() {
    setNum(counts + 1);
  }
  function handleIncrement10() {
    setNum(counts + 10);
  }
  function handleReset() {
    setNum((counts = 0));
  }
  function randomNum() {
    setNum(Math.floor(Math.random() * 100) + 1);
  }

  function handleDecrement() {
    setNum(counts - 1);
  }
  function handleDecrement10() {
    setNum(counts - 10);
  }

  return (
    <div className="container">
      <p className="text">current value:</p>
      <span className="score">{num}</span>
      <div className="buttons">
        <button onClick={handleIncrement}>
          <HiChevronUp />
        </button>
        <button onClick={handleIncrement10}>
          <HiChevronDoubleUp />
        </button>

        <button onClick={handleReset}>
          <VscDebugRestart />
        </button>
        <button onClick={randomNum}>
          <HiHashtag />
        </button>
        <button onClick={handleDecrement10}>
          <HiChevronDoubleDown />
        </button>

        <button onClick={handleDecrement}>
          <HiChevronDown />
        </button>
      </div>
    </div>
  );
}
