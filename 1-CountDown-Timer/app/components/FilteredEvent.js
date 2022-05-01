import useDurationLeft from '../shared/hooks/useDurationLeft'
import styles from '../styles/Collapsable.module.css'

const FilteredEvent = ({ label, date }) => {
  const timeLeft = useDurationLeft(date)

  return (
    <div className={styles.item}>
      <span>{label}</span>
      <span>{timeLeft}</span>
    </div>
  )
}
export default FilteredEvent
