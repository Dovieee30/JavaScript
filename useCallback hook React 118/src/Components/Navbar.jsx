import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  console.log('Navbar is Rendered')

  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={() => getAdjective()}>Get adjective</button>
    </div>
  )
}

export default memo(Navbar)
