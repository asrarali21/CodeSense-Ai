import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Codereview from './component/Codereview';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth Pages/Login';

function App() {


  return (
  <> 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/review' element={<Codereview/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>

  </>
  )
}

export default App
