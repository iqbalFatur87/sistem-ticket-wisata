<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
        <!-- Add px-4 and py-3 for horizontal and vertical padding -->
        <a class="navbar-brand" :href="homeLink">{{ brandName }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li v-for="link in navLinks" :key="link.to" class="nav-item">
                    <router-link :to="link.to" class="nav-link">{{ link.text }}</router-link>
                </li>
            </ul>
        </div>
        <!-- New div to align logout button to the right -->
        <div class="ml-auto">
            <button @click="logout" class="btn btn-outline-danger">Logout</button>
        </div>
    </nav>
</template>
  
  
<script>
import User from '../src/models/User.js'

export default {
    props: {
        brandName: {
            type: String,
            default: 'Admin Toko',
        },
        homeLink: {
            type: String,
            default: '#',
        },
        navLinks: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        async logout() {
            try {
                const isAuthenticated = User.checkAuthentication();

                if (isAuthenticated) {
                    await User.logout();

                    localStorage.removeItem('user');
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
</script>
  
<style></style>

  