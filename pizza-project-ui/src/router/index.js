import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Menu from "../views/Menu.vue";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
