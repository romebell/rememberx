import axios from 'axios';

export const getNotes = () => {
  return axios.get('/api/notes');
};

export const removeNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`);
}

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };