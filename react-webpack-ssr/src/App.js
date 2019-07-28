import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Landing, Users, User } from './pages'

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

const App = ({ users }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/users' render={
          props => <Users {...props} users={users} />
        } />
        <Route path='/users/:username' render={
          props => {
            const user = users.find(
              ({ username }) => username === props.match.params.username
            )

            if (!user) {
              return <h1>404 Not Found</h1>
            }

            return <User {...user} />
          }
        } />
      </Switch>
    </main>
  </>
)

export default App
