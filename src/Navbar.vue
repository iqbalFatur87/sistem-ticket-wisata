<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary px-4 py-3 shadow">
    <a class="navbar-brand text-white" :href="homeLink">{{ brandName }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="link in navLinks" :key="link.to" class="nav-item">
          <router-link :to="link.to" class="nav-link text-white">{{
            link.text
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="ms-auto">
      <button @click="logout" class="btn btn-outline-light">Logout</button>
    </div>
  </nav>
</template>

<script>
import User from "../src/models/User.js";
import { mapMutations } from "vuex";

export default {
  props: {
    brandName: {
      type: String,
      default: "Admin Toko",
    },
    homeLink: {
      type: String,
      default: "#",
    },
    navLinks: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapMutations(["clearUserData"]),
    async logout() {
      try {
        const isAuthenticated = await User.checkAuthentication();
        console.log("Is authenticated:", isAuthenticated);

        if (isAuthenticated) {
          // Call the clearUserData mutation from Vuex to clear userData and authToken
          await this.clearUserData();

          localStorage.removeItem("user");
          this.$router.push("/");
        } else {
          console.log("User is not authenticated. Skipping logout");
        }
      } catch (error) {
        // Handle logout error
        console.error("Logout error:", error);
        // Optionally, show an error message to the user or handle the error in some other way
      }
    },
  },
};
</script>

<style scoped></style>
