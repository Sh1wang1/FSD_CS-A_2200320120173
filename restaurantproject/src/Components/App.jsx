import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Logout from './Logout'
import Dashboard from './Dashboard'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="*" element={<h1>404 Error page</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
