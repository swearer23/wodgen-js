import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { getWod } from '@/resources/wod'
import { WOD_TYPE } from '@/const';
import { Wod } from '@/types';
import { getDailyWodKey } from '@/utils';
 
async function saveDailyWOD(WODList: Wod[]) {
  await kv.set(getDailyWodKey(), WODList);
}

export async function GET() {
  const wodList = []
  for (let key of Object.keys(WOD_TYPE)) {
    const type = WOD_TYPE[key as keyof typeof WOD_TYPE]
    const wod = await getWod(type)
    wodList.push(wod)
  }
  saveDailyWOD(await wodList)
  return new NextResponse('DONE');
}