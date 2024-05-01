import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <nav>
     <ul>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='navbar'>Navbar</Link>
        </li>
        <li>
            <Link to='aboutus'>Aboutus</Link>
        </li>
     </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Layout