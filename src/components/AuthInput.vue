<template>
  <!-- 如果给组件传递了v-model，就相当于给组件传递了两个属性 -->
  <input 
  class="input"
  :placeholder="placeholder"
  :value="value"
  @input="handleInput"
  
  />
</template>

<script>
export default {
    props:[
        "placeholder",
        "value",
        "name",

        "rule",
    ],

    mounted(){

    },
    methods:{
        //每次输入框输入值时都会触发
        handleInput(event){
            this.$emit("input",event.target.value)
        }
    }
}
</script>

<style scoped lang="less">
    .input{
        width: 100%;
        height: 38/360*100vw;
        padding: 20px;
        box-sizing: border-box;
        background: #fff;
        border: none;
        border-bottom: 1px solid #666;
        outline: none;
    }
</style>