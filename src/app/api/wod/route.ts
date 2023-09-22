import { NextRequest, NextResponse } from 'next/server'
import { getWod } from '@/resources/wod'
import { getWodCache } from '@/resources/wodCache'

export async function POST(request: NextRequest) {
  const { body } = await request.json()
  const type = body? body.type : ''
  let wod
  if (process.env.NODE_ENV == 'development') wod = await getWodCache()
  else wod = await getWod(type)
  return NextResponse.json(wod)
}

export async function GET() {
  return new NextResponse('hello world get')
}