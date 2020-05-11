<template>
  <div class="main">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./LayoutHeader";
import Footer from "./LayoutFooter";

export default {
  name: "UserLayout",
  components: { Header, Footer },
  data() {
    return {};
  }
};
</script>
