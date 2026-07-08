"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState("")

   
    const generate = () => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setShortUrl("")
    console.log(result)
    alert(result.message)

  })
  .catch((error) => console.error(error));
    }


    
  return (

      <div className='mx-auto max-w-lg bg-pink-300 p-10 rounded-lg flex flex-col gap-4 mt-10'>
        <h1 className='font-bold text-2xl text-center text-white'>Generate your short URLs</h1>

        <div className='flex flex-col gap-4 mt-4'>
          <input
            type="text"
            value={url}
            className='p-3 rounded-md bg-green-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder="Enter your URL"
            onChange={(e) => seturl(e.target.value)}
          />

          <input
            type="text"
            value={shorturl}
            className='p-2.5 rounded-md bg-green-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500'
            placeholder="Enter your preferred short text for URL"
            onChange={(e) => setShortUrl(e.target.value)} 
          />


          <button onClick={generate} className='bg-pink-500 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded-md'>
            Generate
          </button>
  </div>

{/*   
          {
          generated && <> <span>Your short URL Link:</span> <code><link target="_blank" href={generated}>{generated}</link>
          </code></>
          } */}

{generated && (
  <div>
    <span className='font-bold text-lg text-gray-800'>Your short URL Link: </span>

    <br /> 

    <a className=' hover:underline' href={generated} target="_blank" rel="noreferrer">
      {generated}
    </a>
  </div>
)}
      </div>

      
  )
}

export default Shorten
