import Button from './Button'
import List from './List'
import Counter from './exercices/Counter'
import Props2 from './exercices/Props2'
import Props3 from './exercices/Props3'
import Props5 from './exercices/Props5'

function App() {
  return (
    <>
      <h1>Salut React</h1>
      <Button>Contact</Button>
      <Button>Valider</Button>
      <Button>Demande</Button>
      <List />

      <h2>Exercices props</h2>
      <Props2 />
      <Props3 />
      <Props5 />
      <Counter />
      <Counter init={3} max={10} />
    </>
  )
}

export default App
