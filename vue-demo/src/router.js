import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:"/",
            name:"home",
            component: Home
        },
        {
            path:"/1.5",
            name:"合理应用计算属性和侦听器",
            component: () => import("./views/1.5")
        },
        {
            path:"/1.6",
            name:"生命周期的应用场景和函数式组件",
            component: () => import("./views/1.6")
        },
    ]
})