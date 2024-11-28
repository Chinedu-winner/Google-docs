import { useState } from 'react'
import './App.css'
import Component from '../Component/Component' 
import {useNavigator} from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component/>
    </>
  )
}

export default App
