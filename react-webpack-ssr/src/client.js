import './style.scss'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

const { users } = window.__STATE__

hydrate(
  <App users={users} />,
  document.getElementById('app'),
  () => {
    document.getElementById('ssr-state').remove()
    delete window.__STATE__ // reclaim memory
  }
)
