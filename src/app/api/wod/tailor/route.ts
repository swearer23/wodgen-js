import { NextRequest, NextResponse } from 'next/server'
import { tailorWod } from '@/resources/wod'

export async function POST(request: NextRequest) {
  const { tailorMsg, originWod } = await request.json()
  let wod
  wod = await tailorWod(tailorMsg, originWod)
  return NextResponse.json(wod)
}