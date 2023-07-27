import User from '../models/User.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            loggedIn: false,
            loggedInUser: '',
        };
    },
    methods: {
        async login() {
            try {
                const user = await User.login(this.email, this.password);

                // Set view model properties to reflect login status
                this.loggedIn = true;
                this.loggedInUser = user.name; // Assuming the user object contains the name

                // Store user data in localStorage or Vuex store (optional)

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

            // Clear user data from localStorage or Vuex store (optional)

            // Redirect to login page
            this.$router.push('/');
        },
    },
};
