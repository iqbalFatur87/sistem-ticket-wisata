import axios from 'axios';
import store from '../store';

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

      // If the login is successful, store the userData and authToken in the Vuex store
      const { user, token } = response.data;
      store.commit('setUserData', user);
      store.commit('setAuthToken', token);
      // If the login is successful, return the user data
      return response.data;
    } catch (error) {
      // If there's an error, throw an exception with the error message
      throw new Error('Invalid username or password');
    }
  },
  async logout(store) {
    try {
      // Get the authentication token from the Vuex store
      const token = store.state.authToken;

      // Make the logout request with the authentication token in the headers
      await api.post('/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming your API uses Bearer token authentication
        },
      });

      // If the logout request is successful, clear user data and token in the Vuex store
      store.commit('clearUserData');
      store.commit('clearAuthToken');

      this.$router.push('/');
    } catch (error) {
      // Handle logout error
      console.error('Logout error:', error);
      // Optionally, show an error message to the user or handle the error in some other way
    }
  },

  async checkAuthentication() {
    try {
      // Get the authentication token from the Vuex store
      const token = store.state.authToken;
      // Make a GET request to a protected route to verify authentication
      // Replace 'user' with a protected route that requires authentication
      await api.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // If the previous request didn't throw an error, the user is authenticated
      return true;
    } catch (error){
      // If there's an error, the user is not authenticated
      console.error('Authentication error during checkAuthentication:', error);
      return false;
    }
  }
};

export default User;

