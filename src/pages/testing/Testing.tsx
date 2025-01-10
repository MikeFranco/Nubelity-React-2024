import React from 'react';
import { useCounter } from '../../hooks/useCounter';

const Testing = () => {
  const counterA = useCounter(0);
  const counterB = useCounter(10);
  const counterC = useCounter(200);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Counter A: {counterA.counter}</h1>
      <button onClick={() => counterA.increment(2)}>Increment</button>
      <button
        style={{ marginBlock: '15px' }}
        onClick={() => counterA.decrement(1)}
      >
        Decrement
      </button>
      <button onClick={() => counterA.resetToZero(10)}>Reset To Zero</button>
      <div
        style={{ height: '5px', backgroundColor: 'gold', marginBlock: '10px' }}
      ></div>
      <h1 style={{ textAlign: 'center' }}>Counter B: {counterB.counter}</h1>
      <button onClick={() => counterB.increment(2)}>Increment</button>
      <button
        style={{ marginBlock: '15px' }}
        onClick={() => counterB.decrement(1)}
      >
        Decrement
      </button>
      <button onClick={() => counterB.resetToZero(10)}>Reset To Zero</button>
      <div
        style={{ height: '5px', backgroundColor: 'gold', marginBlock: '10px' }}
      ></div>
      <h1 style={{ textAlign: 'center' }}>Counter C: {counterC.counter}</h1>
      <button onClick={() => counterC.increment(2)}>Increment</button>
      <button
        style={{ marginBlock: '15px' }}
        onClick={() => counterC.decrement(1)}
      >
        Decrement
      </button>
      <button onClick={() => counterC.resetToZero(10)}>Reset To Zero</button>
      <div
        style={{ height: '5px', backgroundColor: 'gold', marginBlock: '10px' }}
      ></div>
    </div>
  );
};

export default Testing;
