import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import SideNav from './components/sidenav/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
       <SideNav/>
    </div>
  )
}

export default App
