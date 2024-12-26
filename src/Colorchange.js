import React, { useState, useEffect } from "react";

function Colorchange() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 200);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("red");
    } else {
      setColor("green");
    }
  }, [count]);

  return (
    <div style={{ color: color }}>
      <h1>Timer: {count}</h1>
    </div>
  );
}

export default Colorchange;


