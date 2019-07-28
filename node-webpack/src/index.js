import 'source-map-support/register'
import express from 'express'

const { PORT = 3000 } = process.env

const app = express()

app.get('/', (req, res) => res.send('Works'))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
