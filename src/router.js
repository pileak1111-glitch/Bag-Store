import {createRouter, createWebHistory } from "vue-router";
import Home from "./routing/Home.vue";
import Product from "./routing/Product.vue"
import About from "./routing/About.vue";
import Contact from "./routing/Contact.vue";
import Cart from "./routing/Cart.vue";
import Login from "./routing/Login.vue";
import Signup from "./routing/Signup.vue";

const routes =[
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
];

// Create a new router instance and pass the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Export the router instance for use in your Vue.js app
export default router;