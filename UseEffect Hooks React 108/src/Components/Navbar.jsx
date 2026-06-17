import React, { useEffect, useState } from 'react'

const Navbar = ({ color }) => {


  // Case 1: Run on every render
  useEffect(() => {
    alert('Hello Welcome to My page! and I will run on Every Render')

  })


  // Case 2: Run only on first render
  useEffect(() => {
    alert('This is My First Render')

  }, [])


  // Case 3: Run only when certain value changes by useState render
  useEffect(() => {
    alert("I am Running Because the Color was Changed")
  }, [color])


  // Example : Cleanup Function ( used when we want to remove something event and clean it up)
  useEffect(() => {
    alert("I am running because component color was chnaged is unmounted/removed from the screen")

    return () => {
      alert("Component was unmounted")
    }
  }, [])



  return (
    <div>
      I am a Navbar of {color} color Hehe....
    </div>
  )
}

export default Navbar
