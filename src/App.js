import { useState } from "react";
// icons
import { FiChevronUp } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { FiRotateCcw } from "react-icons/fi";
import { FiHash } from "react-icons/fi";
import { FiChevronsDown } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

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
          <FiChevronUp />
        </button>
        <button onClick={handleIncrement10}>
          <FiChevronsUp />
        </button>

        <button onClick={handleReset}>
          <FiRotateCcw />
        </button>
        <button onClick={randomNum}>
          <FiHash />
        </button>

        <button onClick={handleDecrement}>
          <FiChevronsDown />
        </button>
        <button onClick={handleDecrement10}>
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
}
