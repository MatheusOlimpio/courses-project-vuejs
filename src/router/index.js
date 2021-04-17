import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Contato from "../views/Contato";
import Cursos from "../views/Cursos";
import Curso from "@/views/Curso";
import PageNotFound from '@/views/PageNotFound';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: Curso,
    props: true
  },
  {
    path: "*", component: PageNotFound 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
