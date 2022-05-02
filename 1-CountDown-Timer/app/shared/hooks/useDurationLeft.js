import customFormatDuration from '../helpers/customFormatDuration'

export const useDurationLeft = (date) => {
  const endsAt = Math.floor(new Date(date).getTime() - new Date().getTime())

  if (isNaN(endsAt)) {
    return
  }

  const timeLeft = customFormatDuration({ start: 0, end: endsAt })
  const [unit, label] = timeLeft.split(' ')

  return `~${+unit + 1} ${label} left`
}

export default useDurationLeft
