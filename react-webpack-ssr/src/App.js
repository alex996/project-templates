import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import routes from './routes'

const Navbar = props => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
    </ul>
  </nav>
)

const App = props => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </main>
  </>
)

export default App
