import shop from "../../api/shop"
import {PRODUCTS} from "../mutation-types"

const state = {
    all :[]
}

const getters = {}

const actions = {
    getAllProducts ({commit}) {
    
    }
}

const mutation = {
    [PRODUCTS.SET_PRODUCTS] (state,products) {

    },
    [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state,{id}) {

    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}

