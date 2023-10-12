import { WOD_TYPE } from "@/const"

export type Wod = {
  title: string
  type: string
  description: string
  content: string
  timecap: string
  exercises: string[]
  round?: number
}

export type TabOption = {
  name: WOD_TYPE,
  value: string,
  active?: boolean,
}