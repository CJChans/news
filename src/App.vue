    <<template>
        <div class="red">
            这是第一个单文件组件123，{{message}}
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
            color:aqua;
        }
    </style>