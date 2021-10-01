import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import PerfilEntrenador from "../views/PerfilEntrenador.vue";
import InicioEntrenador from "../views/InicioEntrenador.vue";


Vue.use(VueRouter);

const routes = [
  /*{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue"),
  },*/
  {
    path: "/",
    name: "InicioEntrenador",
    component: InicioEntrenador,
  },
  {
    path: "/perfil",
    name: "PerfilEntrenador",
    component: PerfilEntrenador,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
