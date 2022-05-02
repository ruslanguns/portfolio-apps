import { useEffect, useState } from 'react'
import useResponsiveMQ from '../shared/hooks/useResponsiveMQ'
import styles from '../styles/Collapsable.module.css'

const Collapsable = ({ label, children }) => {
  const { isSmall } = useResponsiveMQ()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    console.log('isSmall:', isSmall)
    isSmall && setIsOpen(false)
  }, [isSmall])

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
