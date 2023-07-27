<template>
  <div id="app">
    <div>
      <Navbar v-if="shouldShowNavbar" :brandName="brandName" :homeLink="homeLink" :navLinks="navLinks" />
      <router-view :key="$route.fullPath" />
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
        { to: '/transaction', text: 'Transaction' },
        { to: '/products', text: 'Products' },
        { to: '/accounts', text: 'Account' },
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
