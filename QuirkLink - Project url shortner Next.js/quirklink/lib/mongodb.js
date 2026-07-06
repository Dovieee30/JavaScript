
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  serverSelectionTimeoutMS: 2000,
}

let _cachedClient = null
let _connectingPromise = null

function ensureUri() {
  if (!uri) {
    throw new Error('Add Mongo URI to .env.local')
  }
}

/**
 * Returns a connected MongoClient, or null if connection fails.
 * This does NOT attempt to connect at module import time — callers must invoke it.
 */
export async function getClientSafe() {
  ensureUri()

  if (_cachedClient) return _cachedClient

  if (!_connectingPromise) {
    const client = new MongoClient(uri, options)
    _connectingPromise = client
      .connect()
      .then(() => {
        _cachedClient = client
        return _cachedClient
      })
      .catch((err) => {
        // clear promise so callers can retry later
        _connectingPromise = null
        console.error('MongoDB connection failed:', err)
        return null
      })
  }

  return await _connectingPromise
}

export function getCachedClient() {
  return _cachedClient
}