import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const { email } = await request.json()
  return new NextResponse('hello world')
}