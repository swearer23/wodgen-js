import { NextRequest, NextResponse } from 'next/server'
import { getWod } from '@/resources/wod'

export async function POST(request: NextRequest) {
  const { body } = await request.json()
  const type = body.type
  const wod = await getWod(type)
  return wod
}