import { intervalToDuration, formatDuration } from 'date-fns'

export default function customFormatDuration({ start, end }) {
  const durations = intervalToDuration({ start, end })

  return formatDuration(durations)
}
