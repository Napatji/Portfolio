import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'
import Loading from './navigate/Loading'

function App() {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  // window.addEventListener('keydown',(event)=>{
  //   console.log(event)
  // })

  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6500);
  }, [])

  return (
    <div className='App'>
      { loading?
        <Loading/>
        :
        <div className="welcome">
          <h1>- Welcome! -</h1>
          <button className='start' onClick={()=>{navigate('/Portfolio/profile')}}>
            Start
          </button>
        </div>
      }
    </div>
  )
}

export default App
