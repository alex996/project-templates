import React from 'react'
import express from 'express'
import { promises } from 'fs'
import { renderToString } from 'react-dom/server'
import App from './App'

const { PORT = 3000, NODE_ENV = 'development' } = process.env

const IN_PROD = NODE_ENV === 'production'

;(async () => {
  const manifest = IN_PROD
    ? JSON.parse(await promises.readFile('public/manifest.json', 'utf8'))
    : {}

  const app = express()

  app.use(express.static('public'))

  const html = renderToString(<App albums={[]} />)

  let payload = `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>SSR</title>
        <link href='/${IN_PROD ? manifest['main.css'] : 'main.css'}' rel='stylesheet' />
      </head>
      <body>
        <div id='app'>${html}</div>
        <script src='/${IN_PROD ? manifest['main.js'] : 'main.js'}' defer></script>
      </body>
    </html>
  `.trim()

  if (IN_PROD) {
    payload = payload.split(/\s{2,}/).join('') // or use html-minifier
  }

  app.get('/', (req, res) => res.send(payload))

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})()
