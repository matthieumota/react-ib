import { useState } from 'react';

function Counter({ init = 0, max = Infinity }) {
  const [value, setValue] = useState(init);

  const increment = () => {
    setValue((value) => value + 1); // Asynchrone...
    setValue((value) => value + 1);
    setValue((value) => value + 1);
  };
  const decrement = () => setValue(value - 1);

  return (
    <>
      <button onClick={() => decrement()}>-</button>
      <span>{value}</span>
      {value < max && <button onClick={increment}>+</button>}
    </>
  )
}

export default Counter
