import { useState } from 'react';

export const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (incrementBy = 1) => {
    setCounter(counter + incrementBy);
  };
  const decrement = (decrementBy = 1) => {
    setCounter(counter - decrementBy);
  };
  const resetToZero = (resetTo = 0) => {
    setCounter(resetTo);
  };

  return {
    counter,
    increment,
    decrement,
    resetToZero,
  };
};
