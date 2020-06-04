import Vue from "vue";
import Router from "vue-router";
import LayoutUser from "../components/layout/userLayout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Layout from "../layouts/BasicLayout";

Vue.use(Router);

const routes = [
  {
    path: "/user",
    hideInMenu: true, // 在菜单中会被过滤掉
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
            meta: { title: "分析页" },
            name: "analysis",
            component: () => import("../views/Dashboard/Analysis")
          }
        ]
      }
    ]
  },
  {
    path: "/form",
    name: "form",
    component: { render: h => h("router-view") },
    meta: { icon: "form", title: "表单" },
    children: [
      {
        path: "/form/basic-form",
        name: "basicform",
        meta: { title: "基础表单" },
        component: () => import("../views/Forms/BasicForm")
      },
      {
        path: "/form/step-form",
        name: "stepform",
        hideInChildrenMenu: true, // 子路由隐藏掉
        meta: { title: "分布表单" },
        component: () => import("../views/Forms/stepForm")
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hideChildrenInMenu: true,
    hidden: true
  }
];

const router = new Router({
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
