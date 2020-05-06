<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号: {{email}}</p>
    <hr>
    <h2>产品</h2>
    <!-- 产品列表 -->
    <ProductList/>
    <hr>
    <h2>购物车</h2>
    <!-- 购物车 -->
    <ShoppingCart/>
  </div>
</template>

<script>
import { mapState} from "vuex"
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"

export default {
  name: 'App',
  computed:mapState({
    email: state => state.userInfo.email
  }),
  components: {ProductList,ShoppingCart}
}
</script>
