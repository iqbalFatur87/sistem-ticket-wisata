<template>
  <div class="account-container">
    <h1 class="account-heading">Account</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="edit-profile-heading">Edit Profile</h2>
          <form @submit.prevent="updateProfile" class="edit-profile-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="name" placeholder="Enter your name">
            </div>
            <button type="submit" class="btn btn-primary btn-save">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
    };
  },
  methods: {
    updateProfile() {
      // Logic to update profile
      // For this example, let's just show a success message
      alert('Profile updated successfully!');
    },
  }
};
</script>

<style>
/* Custom styles can be added here */
.account-container {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.account-heading {
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
  color: #007bff;
}

.edit-profile-heading {
  font-size: 26px;
  margin-bottom: 20px;
  color: #333;
}

.edit-profile-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-label {
  font-weight: bold;
}

.form-control {
  border-radius: 8px;
}

.btn-save {
  background-color: #007bff;
  border-color: #007bff;
  width: 100%;
}

.btn-save:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

/* Responsive styles */
@media (max-width: 576px) {
  .edit-profile-form {
    max-width: 100%;
  }
}
</style>
