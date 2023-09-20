import path from 'path'
import { getWod } from './wod'
import { Wod } from '@/types/index.d'
import { readFileSync, writeFileSync, existsSync } from 'fs'

type CacheWod = {
  ts: number
  wod: Wod
}

const cache = {
  read: (): CacheWod | undefined => {
    if (!existsSync(path.join(__dirname, '.wod.json'))) {
      return undefined
    }
    const filepath = path.join(__dirname, '.wod.json')
    return JSON.parse(readFileSync(filepath, 'utf-8')) as CacheWod
  },
  write: (wod: Wod) => {
    const filepath = path.join(__dirname, '.wod.json')
    writeFileSync(filepath, JSON.stringify({
      ts: Date.now(),
      wod
    }))
  }
}

export default async () => {
  const cachedWod = cache.read()
  let wod: Wod
  if (cachedWod && cachedWod.ts > Date.now() - 1000 * 5 * 60) {
    wod = cachedWod.wod
  } else {
    wod = (await getWod()) as Wod
    cache.write(wod)
  }
  return wod
}