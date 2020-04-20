<template>
    <li>
        <slot name='pre-icon' :value="value"></slot>
        <span class="red" v-if="!del">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <slot name='suf-icon'></slot>
        <button v-show="!del" @click='handleClick'>删除</button>
    </li>
</template>

<script>
export default {
    props:{
        title:String,
        del:{
            type:Boolean,
            default:false,
        }
    },
    data() {
        return {
            value: Math.random(),
        }
    },
    methods:{
        handleClick() {
            console.log('点击删除按钮')
            this.$emit('delete',this.title)
        }
    }
}
</script>

<style lang="postcss" scoped>
.red {
  color: red;
}
</style>