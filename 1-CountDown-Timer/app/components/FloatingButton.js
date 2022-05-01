import styles from '../styles/FloatingButton.module.css'

const FloatingButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>+</div>
      <div className={styles.items}>
        <span className={styles.item}>r</span>
        <span className={styles.item}>u</span>
      </div>
    </div>
  )
}
export default FloatingButton
