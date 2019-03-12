import axios from 'axios';

export const getUser = user => {
  return axios.get('/api/users/current', user)
}