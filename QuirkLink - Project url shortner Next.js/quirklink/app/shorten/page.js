"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState(null)

    const generate = async () => {
      if (!url || !shorturl) {
        setStatusMessage({ type: 'error', text: 'Please enter both URL and short text.' })
        return
      }

      setIsLoading(true)
      setStatusMessage(null)
      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url, shorturl }),
        })

        const result = await response.json()

        console.log(result)

        if (!response.ok) {
          setStatusMessage({ type: 'error', text: result.message || result.error || 'Failed to generate URL' })
          return
        }

        setGenerated(true)
        setStatusMessage({ type: 'success', text: result.message || 'Generated' })
      } catch (error) {
        console.error(error)
        setStatusMessage({ type: 'error', text: error.message || 'Unable to generate URL' })
      } finally {
        setIsLoading(false)
      }
    }

  return (
    <div className='mx-auto max-w-lg bg-pink-300 p-10 rounded-lg flex flex-col gap-4 mt-10'>
      <h1 className='font-bold text-2xl text-center text-white'>Generate your short URLs</h1>

      <div className='flex flex-col gap-4 mt-4'> 
        {statusMessage && (
          <div className={`p-3 rounded-md ${statusMessage.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {statusMessage.text}
          </div>
        )}
        <input
          type="text"
          value={url}
          className='p-3 rounded-md bg-green-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500'
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className='p-2.5 rounded-md bg-green-100 focus:outline-none focus:ring-2 focus:ring-pink-500'
          placeholder="Enter your preferred short text for URL"
          onChange={(e) => setShortUrl(e.target.value)}
        />

        <button type="button" onClick={generate} disabled={isLoading} className='bg-pink-500 disabled:opacity-50 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded-md'>
          {isLoading ? 'Generating...' : 'Generate'}
        </button>
      </div>

    </div>
  )
}

export default Shorten
