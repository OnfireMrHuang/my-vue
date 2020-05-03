import shop from "../../api/shop"
import {CART,PRODUCTS} from "../mutation-types"

const state = {
    items: [],
    checkoutStatus:null
}

const getters = {
    cartProducts: (state,getters,rootState) => {
        return state.items.map(({id,quantity}) => {
            const product = rootState.products.all.find(product=>product.id===id)
            return {
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },
    cartTotalPrice: (state,getters) => {
        return getters.cartProducts.reduce((total,product) => {
            return total+product.price * product.quantity
        },0)
    }
}

const actions = {
    checkout ({ commit,state},product) {

    },
    addProductToCart ({state,commit},product) {

    }
}

const mutations = {
    [CART.PUSH_PRODUCT_TO_CART] (state,{id}) {

    },
    [CART.INCREMENT_ITEM_QUANTITY] (state,{id}) {

    },
    [CART.SET_CHECKOUT_STATUS] (state,status) {

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}