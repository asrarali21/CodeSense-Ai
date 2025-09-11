import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Codereview from './component/Codereview';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {


  return (
  <> 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/review' element={<Codereview/>}/>
  </Routes>

  </>
  )
}

export default App
