import { useEffect, useState } from 'react'

const useTimeLeft = (date) => {
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    setSecondsLeft(
      Math.floor(new Date(date).getTime() / 1000 - new Date().getTime() / 1000)
    )

    const interval = setInterval(() => {
      secondsLeft <= 0
        ? clearInterval(interval)
        : setSecondsLeft(secondsLeft - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [date, secondsLeft])

  const days = secondsLeft > 0 ? Math.floor(secondsLeft / 24 / 60 / 60) : 0
  const hoursLeft = Math.floor(secondsLeft - days * 86400)
  const hours = secondsLeft > 0 ? Math.floor(hoursLeft / 3600) : 0
  const minutesLeft = Math.floor(hoursLeft - hours * 3600)
  const minutes = secondsLeft > 0 ? Math.floor(minutesLeft / 60) : 0
  const seconds = secondsLeft % 60

  return [days, hours, minutes, seconds]
}
export default useTimeLeft
