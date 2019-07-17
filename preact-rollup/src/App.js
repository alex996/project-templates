import { h } from 'preact' // eslint-disable-line no-unused-vars
import { useState } from 'preact/hooks'

const App = props => {
  const [message] = useState('Preact App')

  return <h1 class='title'>{message}</h1>
}

export default App
