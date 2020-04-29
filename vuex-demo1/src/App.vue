<template>
  <div id="app">
    <h2>it's my test</h2>
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <br>
    <button @click="$store.commit('increment',2)">count++</button>
    <button @click="$store.dispatch('increment')">count++</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    count() {
      return this.$store.state.count
    }
  }
}
</script>
