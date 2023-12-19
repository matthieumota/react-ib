import { useEffect, useRef, useState } from 'react';

function CounterPlus({ step, frequency }) {
  const [running, setRunning] = useState(false);
  const [value, setValue] = useState(0);

  // Soluce useeffect et cycle de vie
  useEffect(() => {
    console.log('APRES');

    if (! running) return () => console.log('AVANT');

    const time = setInterval(() => {
      setValue((value) => value + step);
    }, frequency);

    return () => {
      console.log('AVANT');
      clearInterval(time);
    };
  }, [running]);

  // Soluce classique
  /* const ref = useRef(null);
  const run = () => {
    ref.current = setInterval(() => {
      setValue((v) => v + step);
    }, frequency);
  };
  const stop = () => {
    clearInterval(ref.current);
  }; */

  return (
    <>
      <span>{value}</span>
      <button onClick={() => setRunning(true)}>Démarrer</button>
      <button onClick={() => setRunning(false)}>Arrêter</button>
    </>
  );
}

export default CounterPlus
