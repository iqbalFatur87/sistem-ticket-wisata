import User from '../models/User.js';
import store from '../store.js';

export default {
    methods: {
        async login() {
          try {
            const response = await User.login(this.email, this.password);
            const { user, token } = response.data;
    
            // Redirect to home page and pass user data and token as query params
            this.$router.push({
              path: '/home',
              query: {
                userData: JSON.stringify(user),
                authToken: token,
              },
            });
            // Redirect to home page after a short delay (e.g., 2 seconds)
            setTimeout(() => {
              this.$router.push('/home');
            }, 2000); // Adjust the delay as needed
          } catch (error) {
            // Handle login error (optional)
            console.error(error);
          }
        },
        async logout() {
          try {
            // Call the checkAuthentication method and pass the store instance as an argument
            const isAuthenticated = await User.checkAuthentication(this.$store);
    
            if (isAuthenticated) {
              await User.logout(store);
              store.commit('clearUserData');
              store.commit('clearAuthToken');
    
              this.$router.push('/');
            }
          } catch (error) {
            // Handle logout error
            console.error(error);
            // Optionally, show an error message to the user or handle the error in some other way
          }
        },
      },
};
