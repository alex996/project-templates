import React, { Component } from 'react'

class App extends Component {
  state = {
    message: 'React App'
  }

  render () {
    return <h1>{this.state.message}</h1>
  }
}

export default App
