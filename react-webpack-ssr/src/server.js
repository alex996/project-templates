import React from 'react'
import fetch from 'node-fetch'
import express from 'express'
import { promises } from 'fs'
import { matchPath, StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import routes from './routes'
import App from './App'

global.fetch = fetch

const { PORT = 3000, NODE_ENV = 'development' } = process.env

const IN_PROD = NODE_ENV === 'production'

;(async () => {
  const manifest = IN_PROD
    ? JSON.parse(await promises.readFile('public/manifest.json', 'utf8'))
    : {}

  const app = express()

  app.use(express.static('public'))

  // TODO: favicon.ico falls through as well
  app.get('/*', async (req, res) => {
    let promise = Promise.resolve(null)

    routes.some(route => {
      const match = matchPath(req.path, route)

      if (match && route.loadData) {
        promise = route.loadData(match)
      }

      return match
    })

    const data = await promise

    const context = data ? { data } : {}

    const html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

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
            window.__STATE__ = ${JSON.stringify({ data })}
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
    res.sendStatus(500)
  })

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
})()
