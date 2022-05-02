import styles from '../styles/FloatingButton.module.css'
import Link from 'next/link'
import LightingIcon from './icons/LightingIcon'

const FloatingButton = ({ options }) => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <LightingIcon className="inline w-7 h-7" />
      </div>
      <div className={styles.items}>
        {options.map(({ icon: Icon, href }, index) => (
          <Link key={index} href={href} passHref>
            <span className={styles.item}>
              <Icon href="href" className="inline w-6 h-6" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default FloatingButton
