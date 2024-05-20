import { useState } from "react";

 const useCounter = (intialCount = 0, step = 1) => {
  const [count, setCount] = useState(intialCount);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(intialCount);
  };

  return {
    increment,
    decrement,
    reset,
    count,
  };
};
export default useCounter

