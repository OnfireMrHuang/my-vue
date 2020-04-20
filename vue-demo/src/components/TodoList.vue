<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods:{
        handleDelete(val){
            console.log("删除课程:"+val)
        }
    }
}
</script>