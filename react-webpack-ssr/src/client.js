import './style.scss'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
  () => {
    document.getElementById('ssr-state').remove()
    delete window.__STATE__ // reclaim memory
  }
)
