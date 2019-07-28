export const fetchUsers = async () => (
  await fetch('https://jsonplaceholder.typicode.com/users')
).json()

export const fetchUserById = async id => (
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
).json()
