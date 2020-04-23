<template>
    <div id="nav">
    <template v-for="{ key, name } in list">
      <div :key="key" style="padding: 10px 0">
        <router-link :to="`/${key}`">{{ name }}章节</router-link>
      </div>
    </template>
  </div>    
</template>

<script>
export default {
    name:"Home",
    data() {
        return {
            list: [
                {
                  key: "1.5",
                  name: "合理应用计算属性和侦听器"
                },
                {
                  key: "1.6",
                  name: "生命周期的应用场景和函数式组件"
                },
            ],
        }
    }
}
</script>



