import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Remove "/login" from the baseURL
  withCredentials: true,
});

const User = {
  async login(email, password) {
    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      // If the login is successful, return the user data
      return response.data;
    } catch (error) {
      // If there's an error, throw an exception with the error message
      throw new Error('Invalid username or password');
    }
  },

  async logout() {
    try {
      const response = await api.post('/logout');
      // If the logout is successful, return the user data
      return response.data;
    } catch (error) {
      // If there's an error, throw an exception with the error message
      throw new Error('Unable to logout');
    }
  },

  async checkAuthentication() {
    try {
      // Make a GET request to a protected route to verify authentication
      // Replace 'user' with a protected route that requires authentication
      await api.get('/user');

      // If the previous request didn't throw an error, the user is authenticated
      return true;
    } catch (error){
      // If there's an error, the user is not authenticated
      return false;
    }
  }
};

export default User;

