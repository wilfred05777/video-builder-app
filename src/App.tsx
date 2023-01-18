import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import SideNav from './components/sidenav/SideNav'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <SideNav/>

      
      {/* <Routes>
        <Route>
          <Route path='/settings' element={<SideNav/>}/>
          <SideNav/>
        </Route>
       </Routes> */}
       {/* settings row */}
       {/* output row */}
    </div>
  )
}

export default App
