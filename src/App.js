import React, { useState } from "react";

import "./styles/index.css"

export function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="bg-neutral-900 text-white w-screen h-screen flex items-center justify-center">
      <div>
        <h1 className="text-center">Counter</h1>
        <h1 className="text-center text-3xl my-6">{count}</h1>
        <div className="flex gap-4">
          <button className="py-2 px-5 border border-white focus:outline-lime-500 rounded-lg focus:outline" onClick={decrement}>Decrement</button>
          <button className="py-2 px-5 border border-white focus:outline-lime-500 rounded-lg focus:outline" onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  );
}
