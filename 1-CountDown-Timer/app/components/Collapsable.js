import { useState } from 'react'
import useDurationLeft from '../shared/hooks/useDurationLeft'
import styles from '../styles/Collapsable.module.css'

const Collapsable = ({ label, children }) => {
  useDurationLeft()
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.collapsable}>
      <div
        className={`${styles.label} ${isOpen && styles.active}`}
        onClick={toggle}
      >
        {label}
      </div>

      {isOpen && <div className={styles.items}>{children}</div>}
    </div>
  )
}
export default Collapsable
