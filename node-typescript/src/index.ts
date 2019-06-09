/* eslint-disable no-console */
import express, { Request, Response, NextFunction } from 'express'

const { PORT = 3000 } = process.env

const app = express()

app.use((req: Request, res: Response, next: NextFunction): void => {
  console.log(`${req.method} ${req.url} ${req.protocol} ${req.ip}`)

  next()
})

app.get('/', (req: Request, res: Response): void => {
  res.json({})
})

app.listen(PORT, (): void => console.log(`http://localhost:${PORT}`))
