
import { useEffect, useState } from 'react';
import Product from './Product';

const student = "Sai";

function Headers() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("First");
  }, []);

  useEffect(() => {
    console.log("Second");
  }, []);

  useEffect(() => {
    console.log("Third");
  }, [counter1]);

  const handleDisplayProducts = () => {
    setItems(Product);
  };

  return (
    <div>
      <h2>Hi {student} welcome to react.components</h2>
      <h3>This is function component</h3>
      <h2>{counter1}</h2>
      <h2>{counter2}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Click 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Click 2</button>
      <button onClick={handleDisplayProducts}>Display Products</button>
      {items.map((item) => (
        <h1 key={(link unavailable)}>{item.pname}, {item.pprice}, {item.pcat}</h1>
      ))}
    </div>
  );
}

export default Headers;
