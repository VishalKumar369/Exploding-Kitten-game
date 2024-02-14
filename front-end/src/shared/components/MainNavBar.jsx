import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainNavBar = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainNavBar