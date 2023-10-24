import { NextRequest, NextResponse } from 'next/server'
import { getWod } from '@/resources/wod'
import { getWodCache } from '@/resources/wodCache'
import { getDailyWodKey } from '@/utils'
import { kv } from '@vercel/kv';

export async function POST(request: NextRequest) {
  let wod
  if (process.env.NODE_ENV == 'development') wod = await getWodCache()
  else wod = await getWod()
  return NextResponse.json(wod)
}

export async function GET() {
  const key = getDailyWodKey()
  console.log(key)
  const wod = await kv.get(key)
  return NextResponse.json({
    data: wod
  })
}