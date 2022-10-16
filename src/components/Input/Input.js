import React, { useState } from "react";
import "../Input/input.css";
const Input = ({ textFun }) => {
  const [input, setInput] = useState("");
  const remainingWord = 200 - input.length;
  const handleInput = (e) => {
    if (remainingWord > 0) {
      setInput(e.target.value);
    }
  };

  const handleSave = () => {
    if (input.trim().length > 0) {
      textFun(input);
      setInput("");
    }
  };
  return (
    <div className="input-container">
      <textarea
        rows="6"
        cols="20"
        placeholder="Type here..."
        value={input}
        onChange={handleInput}
      />
      <div className="input-bottom">
        <small>{remainingWord}</small>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Input;
