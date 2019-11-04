import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

const App = props => {
  const [message] = useState('Preact App')

  return <>
    <header />
    <main>
      <h1 class='title'>{message}</h1>
    </main>
  </>
}

export default App
