import styles from '../styles/EventCard.module.css'
import Counter from './Counter'

const EventCard = ({ name, date }) => {
  return (
    <div className={styles.container}>
      <Counter date={date} />
      <h3 className={styles.name}>{name}</h3>

      <div className={styles.information}>
        <span>
          Date:{' '}
          {new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'Europe/London',
          }).format(date)}
        </span>
        <span>
          At:{' '}
          {new Intl.DateTimeFormat('es-ES', {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'Europe/London',
          }).format(date)}
        </span>
      </div>
    </div>
  )
}
export default EventCard
