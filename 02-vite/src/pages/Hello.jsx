import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Hello() {
  const { name } = useParams()
  const navigate = useNavigate()
  const [search, setSearch] = useState(name)

  useEffect(() => {
    // Si on doit "bloquer" la route
    if (name === 'admin') {
      navigate('/')
    }

    console.log(`CALL API ${name}`)
  }, [name]);

  const sayHello = () => {
    navigate(`/bonjour/${search}`)
  }

  return (
    <>
      Hello {name}
      <NavLink to="/bonjour/toto">Toto</NavLink>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => sayHello()}>Bonjour</button>
    </>
  )
}

export default Hello
