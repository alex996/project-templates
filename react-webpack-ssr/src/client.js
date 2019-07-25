import './style.scss'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

hydrate(<App albums={[]} />, document.getElementById('app'))
