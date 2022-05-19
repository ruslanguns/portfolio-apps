import isToday from './isToday'

/**
 * Time validation helper
 *
 * > Built for yup validation.
 *
 * @param {string} value Time value from input
 * @param {import('yup').TestContext<Record<string, any>>} context Context object
 * @return {boolean}
 */
export default function timeValidation(value, context) {
  if (!context.parent.hasOwnProperty('date')) {
    return false
  }

  if (!value) {
    return true
  }

  const date = new Date(context.parent.date).getTime()
  const now = new Date()
  const isTodayDate = isToday(date)

  const hour = +value.split(':')[0]
  const minute = +value.split(':')[1]
  const nowHour = now.getHours()
  const nowMinute = now.getMinutes()

  if (isTodayDate && hour < nowHour) {
    return false
  }

  if (isTodayDate && hour == nowHour && minute < nowMinute) {
    return false
  }

  return true
}
