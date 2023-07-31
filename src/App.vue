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
  updatedPageTitle() {
    // Set the page title based on the current route
    switch (this.$route.path) {
      case '/':
        document.title = 'Login - Admin Toko';
        break
      case '/home':
        document.title = 'Home - Admin Toko';
        break;
      case '/transaction':
        document.title = 'Transaction - Admin Toko';
        break;
      case '/products':
        document.title = 'Products - Admin Toko';
        break;
      case '/accounts':
        document.title = 'Account - Admin Toko';
        break;
      default:
        document.title = 'Admin Toko';
        break;        
    }
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
