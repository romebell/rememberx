import axios from 'axios';

export const getNotes = () => {
  return axios.get('/api/notes');
};

export const getNote = id => {
  return axios.get(`/api/notes/${id}`)
}

export const postNote = note => {
  return axios.post(`/api/notes`, note)
}

export const patchNote = note => {
  return axios.patch(`/api/notes/${note.id}`, note)
}

export const deleteNote = (noteId) => {
  return axios.delete(`/api/notes/${noteId}`);
}

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };