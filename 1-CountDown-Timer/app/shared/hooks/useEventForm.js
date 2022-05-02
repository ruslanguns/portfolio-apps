import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const useEventForm = () => {
  const router = useRouter()
  const { slug } = router.query
  const [isEdit, setIsEdit] = useState(false)
  const form = useForm()

  useEffect(() => {
    slug && slug !== 'add' && setIsEdit(true)
  }, [slug])

  if (!slug) {
    return null
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return {
    slug,
    isEdit,
    onSubmit,
    ...form,
  }
}

export default useEventForm
