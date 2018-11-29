import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const About = props => <h1>About</h1>

const Contact = props => <h1>Contact Us</h1>

const Home = props => <h1>Home</h1>

const Error = props => <h1>404 Not Found</h1>

const links = [
  { path: '/', text: 'Home' },
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/bogus', text: 'Bogus' }
]

const NavBar = props => (
  <nav>
    <ul>
      {links.map(({ path, text }, index) =>
        <li key={index}>
          <Link to={path}>{text}</Link>
        </li>
      )}
    </ul>
  </nav>
)

const App = props => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
