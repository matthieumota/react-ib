import { useState } from 'react'
import Clock from '../Clock';
import Lifecycle2 from '../exercices/Lifecycle2';
import Ajax from '../Ajax';
import Ajax1 from '../exercices/Ajax1';

function Lifecycle() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>Le cycle de vie</h2>
      {show && <Clock />}
      <button onClick={() => setShow(!show)}>
        Cacher / afficher
      </button>
      <Lifecycle2 />

      <h2>Ajax</h2>
      <Ajax />
      <Ajax1 />
    </>
  )
}

export default Lifecycle
