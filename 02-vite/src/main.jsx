import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Lifecycle from './pages/Lifecycle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="cycle-de-vie" element={<Lifecycle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
