import { WOD_PREFERENCE, WOD_TYPE } from "@/const"

const getRandomIndex = (length: number) => {
  return Math.floor(Math.random() * length)
}

export default () => {
  const wodTypes = Object.values(WOD_TYPE)
  const rdmType = wodTypes[getRandomIndex(wodTypes.length)]
  const wodPreferences = Object.values(WOD_PREFERENCE)
  const rdmPreference1 = wodPreferences[getRandomIndex(wodPreferences.length)]
  const rdmPreference2 = wodPreferences[getRandomIndex(wodPreferences.length)]
  return {
    type: rdmType,
    preference: `${rdmPreference1} and ${rdmPreference2}`
  }
}