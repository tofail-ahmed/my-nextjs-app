"use client";

import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div><div>
    <h1>{counter}</h1>
    <button
      className={"p-2 rounded-md m-2 bg-orange-500"}
      onClick={() => setCounter(counter + 1)}
    >
      Increase
    </button>
    <button
      className={"p-2 rounded-md m-2 bg-orange-500"}
      onClick={() => setCounter(counter - 1)}
    >
      Decrease
    </button>
  </div></div>
  )
}

export default Counter