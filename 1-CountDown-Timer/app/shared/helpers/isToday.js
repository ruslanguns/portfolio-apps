/**
 * Is today the given date?
 *
 * @param {string|date|number} date Somedate
 * @return {boolean}
 */
export default function isToday(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  const today = new Date()

  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  )
}
