import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/login"><li>Login</li></a>
      </nav>
    </div>
  )
}

export default Navbar
