import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import SideBar from './components/sideBar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex">
       <SideBar/>
    </div>
  )
}

export default App
