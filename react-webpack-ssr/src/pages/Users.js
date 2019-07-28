import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../api'

const Card = ({ id, name, username, href }) => (
  <div className='card'>
    <h4 className='purple'>{name}</h4>
    <h5>
      <Link to={`${href}/${id}`}>
        {`@${username}`}
      </Link>
    </h5>
  </div>
)

const Users = ({ match, staticContext }) => {
  const { data } = staticContext || window.__STATE__ || {}

  const [users, setUsers] = useState(data)

  useEffect(() => {
    if (!users) {
      (async () => setUsers(await fetchUsers()))()
    }
  }, [])

  if (!users) {
    return <h1>Loading...</h1>
  }

  return users.map(user => (
    <Card
      key={user.id}
      href={match.url} // TODO: could have a trailing '/'
      {...user}
    />
  ))
}

export default Users
