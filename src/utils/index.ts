export const prependNumber = (num: number, digits: number) => {
  return num.toString().padStart(digits, "0");
}