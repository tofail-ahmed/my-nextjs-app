"use client";

import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
  
    <div>
      <div>
        <h1>{counter}</h1>
        <button
          className="btn btn-accent"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
        <button
      className="btn btn-accent"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter