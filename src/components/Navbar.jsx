import React from 'react'
import logo from './Images/logo.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Aniket App</span>
        <ul className="list">
            <li className="listItem">
                <img src={logo} alt="" className="avatar" />
            </li>
            <li className="listItem">Aniket Dhokane</li>
            <li className="listItem">LogOut</li>
        </ul>
    </div>
  )
}

export default Navbar