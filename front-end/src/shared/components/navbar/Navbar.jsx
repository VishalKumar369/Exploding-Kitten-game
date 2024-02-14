import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/klogo.png'

const Navbar = () => {
  return (
    <div className="NavBar-wrapper">
      <ul>
        <Link to="/" className='link'><img src={logo} alt="" /></Link>
        <div className='nav-left'>
        <Link to="user_form" className='link l1' ><li>PLAY GAME</li></Link>
        <Link to="leader_board" className='link'><li>LEADER BOARD</li></Link>
        </div>
      </ul>
    </div>
  )
}

export default Navbar