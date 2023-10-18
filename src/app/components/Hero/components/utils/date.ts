export function GetDateExperience() {
  const year = new Date().getUTCFullYear()

  const yearInitial = 2020

  const yearNow = year - yearInitial

  return yearNow
}
