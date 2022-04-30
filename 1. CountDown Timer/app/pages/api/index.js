// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(404).json({ message: 'Not found', statusCode: 404 })
}
