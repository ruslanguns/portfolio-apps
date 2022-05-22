import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import timeValidation from '../helpers/timeValidation'
import { useContext } from 'react'
import { GlobalStoreContext } from '../contexts/globalStore'

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

  const { state, setState } = useContext(GlobalStoreContext)

  const onSubmit = async (body) => {
    console.log({ body })

    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const { data } = await response.json()

    setState({ ...state, eventos: [...state.eventos, data] })
  }

  return {
    onSubmit,
    ...form,
  }
}

export default useEventForm
