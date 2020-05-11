import Vue from "vue";
import VueRouter from "vue-router";
import LayoutUser from "../components/layout/userLayout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: LayoutUser,
    redirect: "/user/login",
    hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/user/login.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/user/register.vue")
      },
      {
        path: "/404",
        component: () => import("../views/exception/404")
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
