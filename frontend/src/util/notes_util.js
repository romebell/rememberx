import axios from 'axios';

export const getNotes = (notesData) => {
  return axios.get('/api/notes/', notesData);
};

export const removeNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`);
}

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };