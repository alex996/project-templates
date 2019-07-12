import React from 'react'

interface HeadingProps {
  message: string
}

const Heading = ({ message }: HeadingProps) => (
  <h1>{message}</h1>
)

export default Heading
