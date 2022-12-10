import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../login/auth'


const Navlinks = () => {

    const { user, logout } = useAuth()

    const data = useAuth()

    console.log(data);


    return (

        <div>
            <nav>
                <NavLink to="/" >Home </NavLink>
                <NavLink to="/Contact">Contact </NavLink>
                <NavLink to="/About">About </NavLink>

                {
                    user ?
                        <NavLink onClick={logout} to="/Logout">Logout</NavLink>
                        :
                        <NavLink to="/Login">Login</NavLink>
                }

            </nav>

        </div >
    )
}

export default Navlinks