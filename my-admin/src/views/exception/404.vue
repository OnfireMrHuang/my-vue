<template>
  <div style="text-align: center;">
    <IconFont type="icon-404" style="font-size: 100px" />
    <Img :src="logo" alt="" />
  </div>
</template>

<script>
import logo from "@/assets/logo.svg";
export default {
  data() {
    return {
      logo
    };
  }
};
</script>
