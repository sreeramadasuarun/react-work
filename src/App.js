import React from 'react'
import { Routes, Route } from "react-router-dom"
import Contact from './Componets/Contact';
import Home from './Componets/Home';
import About from './Componets/About';
import NavLink from "./Componets/Navlinks"
import Login from './login/Login';
import Logout from './login/Logout';
import { Authprovider } from './login/auth';
import PrivateRoute from "./login/PrivateRoute"


const App = () => {

  return (
    <Authprovider>
      <NavLink />



      <Routes>
        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />

        <Route path='/Contact' element={<PrivateRoute><Contact /></PrivateRoute>} />

        <Route path='/About' element={<PrivateRoute><About /></PrivateRoute>} />


        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes >

    </Authprovider >
  )
}


export default App;