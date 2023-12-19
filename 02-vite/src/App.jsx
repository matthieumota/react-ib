import { useState } from 'react'
import Button from './Button'
import Clock from './Clock'
import List from './List'
import Counter from './exercices/Counter'
import Props2 from './exercices/Props2'
import Props3 from './exercices/Props3'
import Props5 from './exercices/Props5'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Salut React</h1>
      <Button>Contact</Button>
      <Button>Valider</Button>
      <Button>Demande</Button>
      <List />

      {/*<h2>Exercices props</h2>
      <Props2 />
      <Props3 />
      <Props5 />
      <Counter />
      <Counter init={3} max={10} />*/}

      <h2>Le cycle de vie</h2>
      {show && <Clock />}
      <button onClick={() => setShow(!show)}>
        Cacher / afficher
      </button>
    </>
  )
}

export default App
