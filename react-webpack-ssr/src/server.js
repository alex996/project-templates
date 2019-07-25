import 'source-map-support/register'
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from './App'

const { PORT = 3000, NODE_ENV = 'development' } = process.env

const IN_DEV = NODE_ENV === 'development'

;(async () => {
  const app = express()

  app.use(express.static('public'))

  const html = renderToString(<App albums={[]} />)

  const payload = `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>SSR</title>
        <link href='/main.css' rel='stylesheet' />
      </head>
      <body>
        <div id='app'>${html}</div>
        ${IN_DEV ? `<script src='/reload/reload.js'></script>` : ''}
        <script src='/main.js' defer></script>
      </body>
    </html>
  `.trim()

  app.get('/', (req, res) => res.send(payload))

  if (IN_DEV) {
    const { default: reload } = await import('reload')

    await reload(app)
  }

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})()
