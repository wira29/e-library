import React from 'react'
import {Footer, Navbar} from './index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout