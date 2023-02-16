import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './navigate/Loading'
import './App.css'
import Loading from './navigate/Loading'

function App() {

  return (
    <div>
      <Loading/>
      <Routes>
        <Route path='/' element={<Loading/>}/>
      </Routes>
    </div>
  )
}

export default App
