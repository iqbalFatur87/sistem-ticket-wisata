<template>
  <div id="app">
    <div>
      <Navbar v-if="shouldShowNavbar" :brandName="brandName" :homeLink="homeLink" :navLinks="navLinks" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      brandName: 'Admin Toko',
      homeLink: '#',
      navLinks: [
        { to: '/', text: 'Login' },
        { to: '/home', text: 'Home' },
        { to: '/transactions', text: 'Transactions' },
        { to: '/products', text: 'Products' },
        { to: '/account', text: 'Account' },
      ],
      showNavbar: true,
    };
  },
  computed: {
    shouldShowNavbar() {
      const hideNavbarRoutes = ['/'];
      return !hideNavbarRoutes.includes(this.$route.path);
    },
  },
};
</script>
<style>
/* Add your custom styles here */
</style>
