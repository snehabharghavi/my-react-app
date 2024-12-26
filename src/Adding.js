
import React, { useState } from 'react';

function Adding() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMultiply = () => {
    setCount(count * multiplier);
  };

  const handleMultiplierChange = (e) => {
    setMultiplier(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Add 1</button>
      <input type="number" value={multiplier} onChange={handleMultiplierChange} />
      <button onClick={handleMultiply}>Multiply</button>
    </div>
  );
}

export default Adding;

