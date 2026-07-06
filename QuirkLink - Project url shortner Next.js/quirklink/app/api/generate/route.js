import { NextResponse } from 'next/server'
import { getClientSafe } from '@/lib/mongodb'

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body?.url || !body?.shorturl) {
      return NextResponse.json(
        { success: false, error: 'MISSING_FIELDS', message: 'Please provide url and shorturl' },
        { status: 400 }
      )
    }

    const client = await getClientSafe()
    if (!client) {
      return NextResponse.json(
        {
          success: false,
          error: 'DB_UNAVAILABLE',
          message: 'Database unavailable. Try again later.',
        },
        { status: 503 }
      )
    }

    const db = client.db('Quirklink')
    const collection = db.collection('url')

    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return NextResponse.json(
        { success: false, error: 'SHORTURL_EXISTS', message: 'Short URL already exists' },
        { status: 409 }
      )
    }

    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: 'URL Generated Successfully',
        insertedId: result.insertedId,
        shorturl: body.shorturl,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Generate route error:', error)

    const status = error?.name === 'MongoServerSelectionError' ? 503 : 500

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to generate short URL',
        message: 'Unable to save URL right now',
      },
      { status }
    )
  }
}
