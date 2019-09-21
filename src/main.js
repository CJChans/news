    import Vue from "vue"

    //1.导入组件
    import App from "./App.vue";

    //2.注册

    //3.渲染
    new Vue({
        el: "#app",

        //指定一个组件渲染根实例，这个组件可以成为最底层的组件
        render(createElement) {
            //固定写法，只有App可变
            return createElement(App);
        }
    })