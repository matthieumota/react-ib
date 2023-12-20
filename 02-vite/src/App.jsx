import { NavLink, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';

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

      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  )
}

export default App
