import React from 'react'

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

export default User
