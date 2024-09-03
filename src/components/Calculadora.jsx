import { useState } from "react";
import Keys from "./Keys";

const Calculadora = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];
  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");

  const maxLimit = 13;

  function calculateResult() {
    if (display.length !== 0) {
      try {
        let calcDisplay = display.replace(/%/g, "/100");
        let calcResult = eval(calcDisplay);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult);
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    }
  }

  function handleButton(value) {
    setShowResult(false);
    if (value === "AC") {
      setDisplay("");
    } else if (value === "C") {
      setDisplay(display.slice(0, -1));
    } else if (isOperator(value)) {
      if (display === "" || isOperator(display.slice(-1))) {
        return;
      }
      setDisplay(display + value);
    } else if (value === "=") {
      calculateResult();
    } else if (display.length >= maxLimit) {
      alert(`Máximo de caracteres atingido: ${maxLimit}`);
    } else {
      setDisplay(display + value);
    }
  }

  function isOperator(char) {
    return ["*", "/", "%", "+", "-"].includes(char);
  }

  const operationClass =
    "text-[2rem] tracking-[2px] flex gap-[5px] items-center justify-end text-gray-200";
  const resultClass = "text-[2.5rem]";

  return (
    <div className="min-w-[320px] bg-[#838B9B] gap-4 p-4 rounded-2xl ">
      <div className="overflow-x-auto bg-[#06DAAE] min-h-[95px] flex items-end justify-end flex-col p-4 rounded-[10px] mb-4 ">
        <div className={`${showResult ? resultClass : operationClass}`}>
          {display}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]">
        {keys.map((item, index) => (
          <Keys
            label={item}
            key={index}
            keyClass={item === "="}
            onButtonClick={handleButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculadora;
