import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
        <NavLink to="/cycle-de-vie">Cycle de vie</NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default App
