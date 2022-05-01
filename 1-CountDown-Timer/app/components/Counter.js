import styles from '../styles/Counter.module.css'
import useTimeLeft from '../hooks/useTimeLeft'

const CounterBlock = ({ label, value }) => {
  return (
    <div>
      <span>
        {value < 10 && value >= 0 ? '0' + value : value < 0 ? '00' : value}
      </span>
      <span>{label}</span>
    </div>
  )
}
const CounterSeparator = () => {
  return (
    <div>
      <span>:</span>
    </div>
  )
}

const Counter = ({ date }) => {
  const [days, hours, minutes, seconds] = useTimeLeft(date)

  return (
    <div className={styles.counter}>
      <CounterBlock label="Days" value={days} />
      <CounterSeparator />
      <CounterBlock label="Hours" value={hours} />
      <CounterSeparator />
      <CounterBlock label="Mins" value={minutes} />
      <CounterSeparator />
      <CounterBlock label="Secs" value={seconds} />
    </div>
  )
}
export default Counter
