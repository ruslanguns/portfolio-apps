import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().max(40).required(),
  })
  .required()

const useEventForm = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return {
    onSubmit,
    ...form,
  }
}

export default useEventForm
