<template>
    <div>
        <h1>Account</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Edit Profile</h2>
                    <form @submit.prevent="updateProfile">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="name">
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
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
            name: '',
        };
    },
    methods: {
        updateProfile() {
            // Logic to update profile
        },
    }
};
</script>
  
<style>
/* Custom styles can be added here */
</style>
  