import { useForm } from 'react-hook-form'

const useEventForm = () => {
  const form = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return {
    onSubmit,
    ...form,
  }
}

export default useEventForm
