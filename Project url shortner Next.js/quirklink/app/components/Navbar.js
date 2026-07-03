import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='h-16 bg-pink-500 flex items-center justify-between px-10 text-white'>

        <div className="logo font-bold text-xl">
            QuirkLink
        </div>

      <ul className='flex items-center justify-center gap-8'>
        <Link href="/about"><li>About</li></Link>
        <Link href="/"><li>Home</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact</li></Link>

        <li className='flex gap-4'>
        <Link href="/shorten"><button className='bg-pink-400 shadow-lg rounded-full p-3 py-1.5'>Try Now</button></Link>
        <Link href="/github">
          <button className='bg-pink-400 shadow-lg rounded-full p-3 py-1.5'>Github</button>
        </Link>
        </li>

      </ul>
    </nav>

  )
}

export default navbar
