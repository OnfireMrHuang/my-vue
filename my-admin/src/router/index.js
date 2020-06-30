import Vue from "vue";
import Router from "vue-router";
import findLast from "lodash/findLast";
import LayoutUser from "../components/layout/userLayout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { notification } from "ant-design-vue";
import Layout from "../layouts/BasicLayout";
import { check, isLogin } from "../utils/auth";
import NotFound from "../views/exception/404";
import Forbidden from "../views/exception/403";

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
    meta: { authority: ["user", "admin"] },
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
    component: Layout,
    meta: { icon: "form", title: "表单", authority: ["admin"] },
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
    path: "/403",
    redirect: "/403",
    hideInMenu: true,
    component: Forbidden
  },
  {
    path: "*",
    redirect: "/404",
    hideInMenu: true,
    component: NotFound
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
  document.title = "管理后台";

  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有权限访问，请联系管理员咨询"
      });
      next({
        path: "/403"
      });
    }
  }
  next();
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
