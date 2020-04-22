<template>
  <div>
    <p>Reversed message1: "{{ reversedMessage1 }}"</p>
    <p>Reversed message2: "{{ reversedMessage2() }}"</p>
    <p>{{ now }}</p>
    <!-- button按钮执行强制更新操作 -->
    <button @click="() => $forceUpdate()">forceUpdate</button>
    <br />
    <input v-model="message" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello vue"
    };
  },
  computed: {
    // 计算属性拥有缓存，不用在每次渲染时都重新计算
    reversedMessage1: function() {
        console.log("执行reversedMessage1");
        return this.message.split("").reverse().join("");
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
      // methods方法其实也可以实现同样的效果，在每次渲染时都重新计算
    reversedMessage2: function() {
      console.log("执行reversedMessage2");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>