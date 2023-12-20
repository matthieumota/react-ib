import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
        <NavLink to="/cycle-de-vie">Cycle de vie</NavLink>
        <NavLink to="/bonjour/fiorella">Hello Fiorella</NavLink>
        <NavLink to="/todos">TodoList Redux</NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default App
