import React from 'react'

const App = ({ albums }) => (
  <>
    <h1>Albums</h1>
    <ul>
      {albums.map(album => (
        <li>{album.title}</li>
      ))}
    </ul>
  </>
)

export default App
