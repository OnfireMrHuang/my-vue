import Vue from "vue"
import Vuex from "vuex"
import cart from "./modules/cart"
import puducts from "./modules/products"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo:{
            email:"1291553209@qq.com"
        }
    },
    modules:{
        cart,
        products
    },
})