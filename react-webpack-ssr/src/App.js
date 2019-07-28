import React from 'react'
import Card from './Card'

const App = ({ users }) => (
  users.map(user => (
    <Card key={user.id} {...user} />
  ))
)

export default App
