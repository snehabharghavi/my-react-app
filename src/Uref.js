import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Uref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current=count.current+1;
  });

  return (
    <>
    <br></br>
     <label>Enter data : </label>&nbsp;
     <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
export default Uref;