import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, username, href }) => (
  <div className='card'>
    <h4 className='purple'>{name}</h4>
    <h5>
      <Link to={`${href}/${username}`}>
        {`@${username}`}
      </Link>
    </h5>
  </div>
)

const Users = ({ match, users }) => (
  users.map(user => (
    <Card
      key={user.id}
      href={match.url}
      {...user}
    />
  ))
)

export default Users
