import React, { useState, useEffect } from 'react'
import { fetchUserById } from '../api'
import { NotFound } from './'

const User = ({
  name,
  username,
  email,
  phone,
  address: {
    street, suite, city, zipcode
  }
}) => (
  <>
    <h1 className='purple'>{name}</h1>
    <h3>{`@${username}`}</h3>
    <h4>
      <a href={`mailto:${email}`}>{email}</a>
    </h4>
    <h5>
      <a href={`tel:${phone.split(' ')[0]}`}>{phone}</a>
    </h5>
    <address>
      <p>{street}, {suite}</p>
      <p>{city}, {zipcode}</p>
    </address>
  </>
)

const UserContainer = ({ match: { params: { id } }, staticContext }) => {
  const { data } = staticContext || window.__STATE__ || {}

  const [user, setUser] = useState(data)

  useEffect(() => {
    if (!data) {
      (async () =>
        setUser(await fetchUserById(id))
      )()
    }
  }, [])

  if (!user) {
    return <h1>Loading...</h1>
  }

  if (!user.id) {
    return <NotFound />
  }

  return <User {...user} />
}

export default UserContainer
