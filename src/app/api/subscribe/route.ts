import { NextResponse, NextRequest } from "next/server"
import { kv } from '@vercel/kv';
import { SUBSCRIPTION_RDS_KEY } from "@/const";
 
const isEmailExists = async (email: string) => {
  const isExists = await kv.sismember(SUBSCRIPTION_RDS_KEY, email);
  // returns 1 if the member is part of the set and 0 if not
  return isExists
}

const setSubscription = async (email: string) => {
  await kv.sadd(SUBSCRIPTION_RDS_KEY, email);
}

export async function POST(request: NextRequest) {
  const { email } = await request.json()
  const isExists = await isEmailExists(email)
  if (isExists) {
    return NextResponse.json({ error: 'It seems you have already subscribed' }, { status: 400, headers: { 'content-type': 'application/json' } })
  } else {
    await setSubscription(email)
    return NextResponse.json({ message: 'Thanks for subscription, you will be receiving new WOD everyday' })
  }
}