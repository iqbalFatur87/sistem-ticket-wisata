<template>
    <div>
        <h1>Products</h1>
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.stock }}</td>
                            <td>
                                <button class="btn btn-primary" @click="editProduct(product.id)">Edit</button>
                                <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>
/*
export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            // Make an API request to fetch the products from your Laravel backend
            axios.get('/api/products')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        editProduct(productId) {
            // Redirect to the product edit page, passing the productId as a parameter
            this.$router.push({ name: 'editProduct', params: { id: productId } });
        },
        deleteProduct(productId) {
            // Make an API request to delete the product
            axios.delete(`/api/products/${productId}`)
                .then(() => {
                    // Remove the deleted product from the local products array
                    this.products = this.products.filter(product => product.id !== productId);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
*/
</script>
  
<style scoped>
/* Add any custom styles specific to this component if needed */
</style>
  