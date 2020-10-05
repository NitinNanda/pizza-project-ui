import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Menu from "../views/Menu.vue";
import Pizza from "../components/Pizza.vue";
import Side from "../components/Side.vue";
import Drink from "../components/Drink.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/pizza",
    name: "Pizza",
    component: Pizza
  },
  {
    path: "/side",
    name: "Side",
    component: Side
  },
  {
    path: "/drink",
    name: "Drink",
    component: Drink
  }
];

const router = new VueRouter({
  routes
});

export default router;
