import { Landing, Users, User, NotFound } from './pages'
import { fetchUsers, fetchUserById } from './api'

if (typeof global !== 'undefined') {
  global.fetch = require('node-fetch')
}

const routes = [
  {
    path: '/',
    exact: true,
    component: Landing
  },
  {
    exact: true,
    path: '/users',
    component: Users,
    loadData: fetchUsers
  },
  {
    path: '/users/:id',
    component: User,
    loadData: ({ params: { id } }) => fetchUserById(id)
  },
  {
    component: NotFound
  }
]

export default routes
