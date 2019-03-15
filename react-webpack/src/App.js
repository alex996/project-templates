import React, { useState } from 'react'

const App = props => {
  const [message] = useState('React App')

  return (
    <h1>{message}</h1>
  )
}

export default App
