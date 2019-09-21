    <<template>
        <div class="red">
            这是第一个单文件组件123，{{message}},
            <router-link to="/login">登录项</router-link>
            <router-view></router-view>
        </div>
    </template>
    
    <script>
    export default {
        data(){
            return{
                message:"hello vue"
            }
        }
    }
    </script>
    
    <style>
        .red{
            color:green;
            font-size: 24px;
        }
    </style>