import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './zucca-theme.css'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/login'></Route>
        <Route path='/home'></Route>
        <Route path='/appointment'></Route>
        <Route path='/signup'></Route>
      </Routes>
    </div>
  )
}

export default App;
