<template>
  <div>
    <a-drawer
      title="风格设置"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <template>
          <h2>整体风格定制</h2>
          <a-radio-group v-model="navTheme">
            <a-radio :value="dark">黑色</a-radio>
            <a-radio :value="light">白色</a-radio>
          </a-radio-group>
          <h2>导航模式</h2>
          <a-radio-group v-model="navLayout">
            <a-radio :value="top">顶部</a-radio>
            <a-radio :value="left">左侧</a-radio>
          </a-radio-group>
        </template>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: "dark",
      navLayout: "left"
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
