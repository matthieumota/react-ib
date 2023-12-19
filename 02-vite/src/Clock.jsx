import { useEffect, useState } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  // Lance moi ce code au chargement du composant
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      console.log('ici');
    }, 1000);
    console.log('fin');

    // Fonction à appeler quand le composant
    // est détruit
    return () => {
      console.log('début');
      clearInterval(timer);
    }
  }, []); // [] => On fait le code une seule fois dans le premier render

  // Lance moi ce code à chaque fois que l'horloge
  useEffect(() => {
    // Nouvelle date
    console.log('fin maj', date);

    if (date.getSeconds() % 10 === 0) {
      console.log('ding dong');
    }

    return () => {
      // Ancienne date
      console.log('début maj', date);
    }
  }, [date]);

  return (
    <h1>{date.toLocaleTimeString()}</h1>
  );
}

export default Clock;
