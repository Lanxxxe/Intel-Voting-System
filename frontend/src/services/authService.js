import axios from '../utils/axios';

const login = async (credentials) => {
  const response = await axios.post('/login', credentials);
  return response.data;
};

export default { login };