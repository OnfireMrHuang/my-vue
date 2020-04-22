<template>
  <div>

    {{ fullName }}

    <!-- v-model双向绑定 -->
    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "Foo",
      lastName: "Bar"
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  watch: {
    // 监听fullName属性，如果有改动，则打印新值和旧值
    fullName: function(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>