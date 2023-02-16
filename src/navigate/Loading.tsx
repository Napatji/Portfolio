import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Loading.css'

function Loading() {
    
  return (
    <div className="App">
      <h1>Loading</h1>
      <div className="loading-bar">
        <div className="loading-bar-start"></div>
        <div className="loading-bar-mid1"></div>
        <div className="loading-bar-mid2"></div>
        <div className="loading-bar-mid3"></div>
        <div className="loading-bar-mid4"></div>
        <div className="loading-bar-mid5"></div>
        <div className="loading-bar-mid6"></div>
        <div className="loading-bar-mid7"></div>
        <div className="loading-bar-mid8"></div>
        <div className="loading-bar-end"></div>
      </div>
    </div>
  )
}

export default Loading
