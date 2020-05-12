<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <SiderMenu />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-fold' : 'menu-unfold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettintDrawer />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
import SettintDrawer from "../components/SettingDrawer";

export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettintDrawer
  }
};
</script>

<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
  float: left;
}
.trigger:hover {
  background: #eeeeee;
}
</style>
