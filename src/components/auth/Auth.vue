<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center vh-100"
  >
    <div class="card p-4 shadow-lg bg-body rounded border-0">
      <h2 class="card-title text-center mb-4">Admin Toko</h2>
      <small class="card-title text-center"
        >Silakan Login terlebih dahulu</small
      >
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control form-control-lg"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control form-control-lg"
          />
        </div>
        <div class="d-grid">
          <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
      <div
        class="modal fade"
        ref="errorModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="errorModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="errorModalLabel">Error</h5>
              <button
                type="button"
                class="close"
                @click="closeModal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Invalid username or password. Please try again.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Success modal with user data and token -->
      <div
        class="modal fade"
        ref="successModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="successModalLabel">Login Success!</h5>
              <button
                type="button"
                class="close"
                @click="closeModal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>You have successfully logged in!</p>
              <!-- Display user data and token in the success modal -->
              <p>User Data: {{ userData }}</p>
              <p>Auth Token: {{ authToken }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "/src/models/User.js";
import AuthViewModel from "../../viewmodels/AuthViewModel";

export default {
  mixins: [AuthViewModel],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await User.login(this.email, this.password);
        const { user, token } = response.data;

        // Store user data and token in the viewmodel
        this.userData = user;
        this.authToken = token;

        // Successful login, store user data in localStorage or Vuex store
        localStorage.setItem("user", JSON.stringify(user));

        // Show login success modal
        this.$refs.successModal.classList.add("show");
        this.$refs.successModal.style.display = "block";
        this.$refs.successModal.removeAttribute("aria-hidden");

        // Redirect to home page after a short delay (e.g., 2 seconds)
        setTimeout(() => {
          this.$router.push("/home");
        }, 2000); // Adjust the delay as needed
      } catch (error) {
        // Invalid credentials, display error message
        this.$refs.errorModal.classList.add("show");
        this.$refs.errorModal.style.display = "block";
        this.$refs.errorModal.removeAttribute("aria-hidden");
      }
    },
    closeModal() {
      // Close both error and success modals
      this.$refs.errorModal.classList.remove('show');
      this.$refs.errorModal.style.display = 'none';
      this.$refs.errorModal.setAttribute('aria-hidden', 'true');
      this.$refs.successModal.classList.remove('show');
      this.$refs.successModal.style.display = 'none';
      this.$refs.successModal.setAttribute('aria-hidden', 'true');
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  max-width: 600px;
  width: 100%;
  margin: auto;
}

.form-control-lg {
  height: 60px;
  font-size: 1.25rem;
}

.btn-lg {
  padding: 1rem;
  font-size: 1.25rem;
  justify-content: center;
}
</style>
