import { useState } from 'react'
import styles from '../styles/CollapsableFilter.module.css'

const CollapsableFilter = ({ label, items }) => {
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

      {isOpen && (
        <div className={styles.items}>
          {items.slice(0, 5).map((item, idx) => (
            <div key={idx} className={styles.item}>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default CollapsableFilter
