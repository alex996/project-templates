import React from 'react'
import express from 'express'
import fetch from 'node-fetch'
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

  app.get('/', async (req, res) => {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    const html = renderToString(<App users={users} />)

    let payload = `
      <!DOCTYPE html>
      <html lang='en'>
        <head>
          <meta charset='utf-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <title>SSR</title>
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
          <link rel='stylesheet' href='/${IN_PROD ? manifest['main.css'] : 'main.css'}' />
        </head>
        <body>
          <div id='app'>${html}</div>
          <script id='ssr-state'>
            window.__STATE__ = ${JSON.stringify({ users })}
          </script>
          <script src='/${IN_PROD ? manifest['main.js'] : 'main.js'}' defer></script>
        </body>
      </html>
    `.trim()

    if (IN_PROD) {
      payload = payload.split(/\s{2,}/).join('') // or use html-minifier
    }

    res.send(payload)
  })

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500)
  })

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})()
