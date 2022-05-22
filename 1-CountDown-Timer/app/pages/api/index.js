import { randomUUID } from 'node:crypto'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const EVENTOS = []

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return await crear(req, res)
  }

  if (req.method === 'GET') {
    return await getAll(req, res)
  }

  res.status(404).json({ message: 'Not found', statusCode: 404 })
}

async function crear(req, res) {
  console.log(req.body)

  const id = randomUUID()
  let { name, date, time, description } = req.body

  if (time) {
    const [hour, minute] = time.split(':')
    const newDate = new Date(date)

    newDate.setHours(hour)
    newDate.setMinutes(minute)

    date = newDate.getTime()
  } else {
    date = new Date(date).getTime()
  }

  const evento = {
    id,
    name,
    date,
    description,
  }

  console.log(evento)

  // Validate that the event is unique
  const eventoExistente = EVENTOS.find((event) => event.id === id)

  if (eventoExistente) {
    return res
      .status(400)
      .json({ message: 'Evento ya existente', statusCode: 400 })
  }

  EVENTOS.push(evento)

  res.status(201).json({
    message: 'Algo creado correctamente',
    statusCode: 201,
    data: evento,
  })

  console.log(EVENTOS)
}

async function getAll(req, res) {
  res.status(200).json({
    message: 'Eventos obtenidos correctamente',
    statusCode: 200,
    data: EVENTOS,
  })
}
