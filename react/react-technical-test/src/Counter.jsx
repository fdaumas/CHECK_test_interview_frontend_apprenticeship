import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCouner = () => {
    setCounter((prev) => prev + 1);
  }

  const decrementCounter = () => {
    if (counter > 0)
      setCounter((prev) => prev - 1);
    else 
      alert("counter cannot go below 0")
  }

  return (
    <div className={"counter"}>
      <div className={"counter-btn"}>
        <button onClick={incrementCouner}>increment</button>
        <button onClick={decrementCounter}>decrement</button>
      </div>
      {counter}
    </div>
  )
}

export default Counter;
