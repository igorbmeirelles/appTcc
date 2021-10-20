import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutPage from "@/views/About/Index.vue"
import AboutComponent from "../components/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    },
  },
  {
    path: "/about",
    component: AboutPage,
    children: [
      {
        path: ":id",
        meta: {
          title: "Sobre"
        },
        component: AboutComponent
      }
    ]
  },
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | IST`;
  next();
});
export default router;
