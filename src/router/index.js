import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../components/auth/Auth.vue'
import Home from '../components/home/Home.vue'
import Transaction from '../components/transactions/Transactions.vue'
import Product from '../components/products/Products.vue'
import Account from '../components/accounts/Account.vue'


const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }, // Add this meta field to protect the home page
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction,
  },
  {
    path: '/products',
    name: 'Products',
    component: Product,
  },
  {
    path: '/accounts',
    name : 'Accounts',
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
