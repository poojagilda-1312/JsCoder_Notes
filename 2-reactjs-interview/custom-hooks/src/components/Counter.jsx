import useCounter from "../hooks/use-counter";

 export default function Counter() {
  const { increment, decrement, reset, count } = useCounter(0, 2);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

