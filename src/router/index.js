import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutPage from "@/views/About/Index.vue";
import AboutComponent from "../components/About.vue";
import Dados from "../views/Dados.vue";
import QuemSomos from "../views/QuemSomos.vue";
import HealthUnities from "../views/HealthUnities.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    component: AboutPage,
    children: [
      {
        path: ":id",
        meta: {
          title: "Sobre",
        },
        component: AboutComponent,
      },
    ],
  },
  {
    path: "/dados",
    name: "Dados",
    component: Dados,
    meta: {
      title: "Dados",
    },
  },
  {
    path: "/quemSomos",
    name: "QuemSomos",
    component: QuemSomos,
    meta: {
      title: "Quem Somos",
    },
  },
  {
    path: "/unidadesdesaude",
    name: "UnidadesDeSaude",
    component: HealthUnities,
    meta: {
      title: "Unidades de Saúde",
    },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | IST`;
  next();
});
export default router;
