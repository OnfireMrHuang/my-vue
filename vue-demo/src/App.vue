<template>
  <div id="app">
    {{ message }}
    <div :id="message">
      <todo-list>
        <todo-item v-for='item in list' :key='item.title' :title='item.title' :del='item.del'>
          <template v-slot:pre-icon='{value}'>
            <span>前置图标 {{value}}</span>
          </template>
        </todo-item>
      </todo-list>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList,
  },
  data() {
    return {
      message: 'Hello Vue!',
      list:[
        {
          title:"课程1",
          del:false,
        },
        {
          title:"课程2",
          del:false,
        }
      ],
    }
  },
  methods:{
    handleDelete(val){
      console.log("删除课程:"+val)
    }
  }
}
</script>