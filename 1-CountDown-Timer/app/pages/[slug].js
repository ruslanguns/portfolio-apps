import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import BackIcon from '../components/icons/BackIcon'
import useEventForm from '../shared/hooks/useEventForm'
import styles from '../styles/Event.module.css'

export default function Home() {
  const router = useRouter()
  const { slug } = router.query
  const [isEdit, setIsEdit] = useState(false)
  const {
    onSubmit,
    handleSubmit,
    register,
    formState: { errors },
  } = useEventForm()

  useEffect(() => {
    slug && slug !== 'add' && setIsEdit(true)
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
        <Heading icon={BackIcon} backHref="/" title="Submit an event" />

        <small>All fields with an asterisk (*) are mandatory.</small>

        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="left-0 flex flex-col w-full gap-3 mt-4 text-sm sm:mx-0 sm:-left-36"
        >
          <label className="w-full">
            <span className="text-sm">Name *</span>
            <input
              {...register('name')}
              className={`${styles.control} ${errors.name && styles.error}`}
              placeholder="Event name goes here!"
            />
            {errors.name && (
              <small className="text-red-500 text-shadow-md">
                {errors.name?.message}{' '}
              </small>
            )}
          </label>

          <div className="flex flex-col justify-between w-full gap-2 sm:flex-row ">
            <label className="w-full">
              <span className="text-sm">Date *</span>
              <input
                {...register('date')}
                type="date"
                className={styles.control}
                min={new Date().toISOString().split('T')[0]} // 2022-05-02
              />
            </label>

            <label className="w-full">
              <span className="text-sm">Time</span>
              <input
                {...register('time')}
                className={styles.control}
                type="time"
              />
            </label>
          </div>

          <label className="w-full">
            <span className="text-sm">Description</span>
            <textarea
              {...register('description')}
              rows={5}
              className={styles.control}
              placeholder="Provide some details about this event"
            />
          </label>

          <button className="self-center block py-2 hover:bg-[#5aac9d] px-20 mt-5 bg-[#53A798]">
            Start
          </button>
        </form>
      </main>
    </div>
  )
}
