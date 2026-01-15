import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [val, setVal] = useState(0);
  const [input, setInput] = useState<number>(0); // Fix: input is number now

  console.log(val);

  return (
    <>
      <div className="text">
        <h1>Counter</h1>
      </div>
      <br />
      <div className="add">
        <h1>{val}</h1>
        <button
          onClick={() => {
            setVal(0);
            setInput(0); 
          }}
        >
          Reset
        </button>

        <div className="add1">
          <button
            onClick={() => {
              setVal(val + 5);
            }}
          >
            Add 5
          </button>
          <button
            onClick={() => {
              setVal(val - 5);
            }}
          >
            Subtract 5
          </button>
        </div>

        <div className="add2">
          <input
            value={input}
            onChange={(e) => setInput(Number(e.target.value))} 
            type="number"
            id="number"
          />
          <button
            onClick={() => {
              setVal(val + input); 
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
