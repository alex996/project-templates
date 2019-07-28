import React from 'react'

const Card = ({ name, username }) => (
  <div className='card'>
    <h4 className='title'>{name}</h4>
    <h5 className='subtitle'>
      <a href='#'>{`@${username}`}</a>
    </h5>
  </div>
)

export default Card
