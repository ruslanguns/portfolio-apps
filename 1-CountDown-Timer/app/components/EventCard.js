import styles from '../styles/EventCard.module.css'
import Counter from './Counter'

const EventCard = ({ name, date }) => {
  return (
    <div className={styles.container}>
      <Counter date={date} />
    </div>
  )
}
export default EventCard
