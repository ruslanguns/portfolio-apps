import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Event.module.css'
import BackIcon from '../components/icons/BackIcon'
import Heading from '../components/Heading'

export default function Home() {
  const router = useRouter()
  const { slug } = router.query
  const [isEdit, setIsEdit] = useState(true)

  useEffect(() => {
    slug && slug === 'edit' && setIsEdit(true)
  }, [slug])

  if (!slug) {
    return null
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{isEdit ? `Edit event | ${slug}` : 'Add an event'}</title>
        <meta name="description" content="Create an event form" />
      </Head>

      <main className={styles.main}>
        <Heading icon={BackIcon} title="Submit an event" />

        <p className={styles.description}>Under construction!</p>
      </main>
    </div>
  )
}
