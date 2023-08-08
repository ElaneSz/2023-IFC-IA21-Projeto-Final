import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './templetes/Home.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './templetes/Login.tsx'
import NotFaund from './templetes/NotFound.tsx'
import SingnUp from './templetes/SingnUp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}  />
        <Route path='/home' Component={Home} />
        <Route path='/singnup' Component={SingnUp} />
        <Route path='*' Component={NotFaund} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
