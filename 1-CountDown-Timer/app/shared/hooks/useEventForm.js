import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import timeValidation from '../helpers/timeValidation'

const schema = yup
  .object({
    name: yup.string().max(40).required(),
    date: yup
      .date()
      .nullable()
      .typeError('date is missing or is invalid')
      .min(
        new Date(Date.now() - 1000 * 60 * 60 * 24),
        'date must be at least from today'
      )
      .required(),
    time: yup
      .string()
      .test('onTime', '${path} must be later than now()', timeValidation),
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
