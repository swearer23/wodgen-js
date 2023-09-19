import { NextRequest, NextResponse } from 'next/server'
import getWodCache from '@/resources/wodCache'

export async function POST(request: NextRequest) {
  const { body } = await request.json()
  const type = body.type
  const wod = await getWodCache(type)
  return wod
}