<template>
    <div class="container mt-4">
        <h2>Point of Sale</h2>

        <div class="row mt-4">
            <div class="col-md-6">
                <!-- Product List -->
                <h4>Available Products</h4>
                <ul class="list-group">
                    <li v-for="product in availableProducts" :key="product.id"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        {{ product.name }}
                        <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
                    </li>
                </ul>
            </div>

            <div class="col-md-6">
                <!-- Shopping Cart -->
                <h4>Shopping Cart</h4>
                <ul class="list-group">
                    <li v-for="(item, index) in cart" :key="index"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        {{ item.product.name }}
                        <div>
                            <button class="btn btn-secondary btn-sm mr-2" @click="decrementQuantity(item)">-</button>
                            {{ item.quantity }}
                            <button class="btn btn-secondary btn-sm ml-2" @click="incrementQuantity(item)">+</button>
                        </div>
                        <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">Remove</button>
                    </li>
                </ul>

                <div class="mt-4">
                    <h5>Total: {{ getTotal() }}</h5>
                    <button class="btn btn-success" @click="checkout()">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
/*export default {
    data() {
        return {
            availableProducts: [
                { id: 1, name: 'Product 1', price: 10 },
                { id: 2, name: 'Product 2', price: 20 },
                { id: 3, name: 'Product 3', price: 15 },
                // Add more products as needed
            ],
            cart: [],
        };
    },
    methods: {
        addToCart(product) {
            const existingItem = this.cart.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ product: { ...product }, quantity: 1 });
            }
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
        incrementQuantity(item) {
            item.quantity++;
        },
        decrementQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
        },
        checkout() {
            // Implement your checkout logic here
            console.log('Checkout clicked! Total:', this.getTotal());
            // You can reset the cart or perform any other actions here
            // this.cart = [];
        },
    },
};
*/
</script>