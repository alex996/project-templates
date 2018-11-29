import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

class App extends Component {
  state = {
    message: 'Preact App'
  }

  render () {
    return <h1 class='title'>{this.state.message}</h1>
  }
}

export default App
