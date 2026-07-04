"use client"
import React, { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)

  return (
    <div className='mx-auto max-w-lg bg-pink-300 p-10 rounded-lg flex flex-col gap-4 mt-10'>
      <h1 className='font-bold text-2xl text-center text-white'>Generate your short URLs</h1>

      <div className='flex flex-col gap-4 mt-4'> 
        <input
          type="text"
          value={url}
          className='p-3 rounded-md bg-green-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500'
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className='p-2.5 rounded-md bg-green-50 focus:outline-none focus:ring-2 focus:ring-pink-500'
          placeholder="Enter your preferred short text for URL"
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <button className='bg-pink-500 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded-md '>Generate</button>
      </div>

    </div>
  )
}

export default shorten
