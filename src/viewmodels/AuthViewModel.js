import User from '../models/User.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            loggedIn: false,
            loggedInUser: '',
            userData: null,
            authToken: null,
        };
    },
    methods: {
        async login() {
            try {
                const response = await User.login(this.email, this.password);
                const { user, token } = response.data;

                // Set view model properties to reflect login status
                this.loggedIn = true;
                this.loggedInUser = user.name;

                // Store user data and token in constant variables
                this.userData = user;
                this.authToken = token;

                // Optionally, you can save user data and token to localStorage or Vuex store
                localStorage.setItem('user', JSON.stringify(this.userData));
                localStorage.setItem('token', this.authToken);
                 // Redirect to home page and pass user data and token as props
                this.$router.push({
                    path: '/home',
                    query: {
                        userData: JSON.stringify(this.userData),
                        authToken: this.authToken,
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
        logout() {
            // Clear view model properties to reflect logout status
            this.email = '';
            this.password = '';
            this.loggedIn = false;
            this.loggedInUser = '';

            // Clear user data and token from constant variables
            this.userData = null;
            this.authToken = null;

            // Optionally, you can also remove user data and token from localStorage or Vuex store
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            // Redirect to login page
            this.$router.push('/');
        },
    },
};
