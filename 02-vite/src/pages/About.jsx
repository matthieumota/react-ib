import Counter from '../exercices/Counter'
import CounterPlus from '../exercices/CounterPlus'
import Props2 from '../exercices/Props2'
import Props3 from '../exercices/Props3'
import Props5 from '../exercices/Props5'
import StateChallenge from '../exercices/StateChallenge'

function About() {
  return (
    <>
      <h2>Exercices props</h2>
      <Props2 />
      <Props3 />
      <Props5 />
      <Counter />
      <Counter init={3} max={10} />
      <CounterPlus step={1} frequency={1000} />
      <StateChallenge />
    </>
  )
}

export default About
