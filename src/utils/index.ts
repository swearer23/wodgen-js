import dayjs from 'dayjs';
import { DAILY_WOD_RDS_KEY } from '@/const';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export const prependNumber = (num: number, digits: number) => {
  return num.toString().padStart(digits, "0");
}

export const getDailyWodKey = () => {
  const date = dayjs().utc().startOf('day').format('YYYY_MM_DD')
  const key = `${DAILY_WOD_RDS_KEY}_${date}`
  return key
}