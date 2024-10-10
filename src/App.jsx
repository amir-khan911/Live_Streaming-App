import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Join from './Pages/Join'
import ZegoCloud from './Pages/ZegoCloud'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Join/>}/>
    <Route path='/room/:id' element = {<ZegoCloud/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App