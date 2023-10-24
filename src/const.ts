export enum WOD_TYPE {
  AMRAP = 'AMRAP',
  FOR_TIME = 'FOR TIME',
  EMOM = 'EMOM',
  OTHER = 'OTHER'
}

export enum WOD_PREFERENCE {
  CARDIO = 'CARDIO',
  WEIGHTLIFTING = 'WEIGHTLIFTING',
  POWERLIFTING = 'POWERLIFTING',
  GYMNASTICS = 'GYMNASTICS',
  // STRONGMAN = 'STRONGMAN',
  MACHINE = 'MACHINE',
  TECHNIQUE = 'TECHNIQUE',
  SPEED = 'SPEED',
  // PR = 'PR',
}

const ENV_PREFIX_MAP: {[key: string]: string} = {
  production: 'PROD',
  preview: 'PREVIEW',
  development: 'DEV',
}
const VERCEL_ENV = process.env.VERCEL_ENV || 'development'
const KV_PREFIX = ENV_PREFIX_MAP[VERCEL_ENV]
export const SUBSCRIPTION_RDS_KEY = `${KV_PREFIX}_SUBSCRIPTIONS`
export const DAILY_WOD_RDS_KEY = `${KV_PREFIX}_DAILY_WOD`