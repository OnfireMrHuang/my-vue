import Vue from "vue";
import VueRouter from "vue-router";
import LayoutUser from "../components/layout/userLayout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../layouts/BasicLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
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
    path: "/",
    component: Layout,
    children: [
      //dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis"
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { icon: "dashboard", title: "仪表盘" },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/dashboard/analysis",
            meta: {title: "分析页"},
            name: "analysis",
            component: () => import("./views/Dashboard/Analysis")
          }
        ]
      }
    ]
  },
  {
    path: "/form",
    name: "form",
    component: { render: h => h("router-view") },
    meta: {icon: 'form', title: "表单"},
    children: [
      {
        path: "form/basic-form",
        name: "basicform",
        meta: { title: "基础表单" },
        component: () => import("./views/Forms/BasicForm")
      },
      {
        path: "/form/step-form",
        name: "stepform",
        hideInChildrenMenu: true,
        meta: { title: "分布表单" },
        component: () => import("./views/Forms/stepForm"),
        children: [{}]
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hideInMenu: true,
    hidden: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
