import { createRouter , createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue"
import Cart from "../views/Cart.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;