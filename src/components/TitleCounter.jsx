import { useState, useEffect } from "react";

export default function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
}