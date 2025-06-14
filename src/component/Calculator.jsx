import React, { useState } from "react";
import { motion } from "framer-motion";

const buttons = [
  "C", "/", "*", "←",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", ".", 
];

function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") return setExpression("");
    if (value === "←") return setExpression(expression.slice(0, -1));
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
      return;
    }
    setExpression((prev) => prev + value);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-80 space-y-4">
      <div className="bg-gray-100 text-right text-xl font-mono p-4 rounded-lg h-16 overflow-x-auto">
        {expression || "0"}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(btn)}
            className={`py-4 text-xl rounded-lg shadow ${
              btn === "="
                ? "bg-green-500 text-white"
                : btn === "C"
                ? "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {btn}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
