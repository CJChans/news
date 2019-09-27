<template>
    <!-- 我的关注页面 -->
  <div>
      <HeaderNormal title="我的关注"/>

      <!-- 关注用户的列表 -->
      <div class="follow-item" v-for="(item,index) in list" :key="index">
          <img :src=" $axios.defaults.baseURL + item.head_img " alt="">

          <div class="item-center">
              <p>{{item.nickname}}</p>
              <span>2019-9-25</span>
          </div>

          <span class="cancel" @click ="handleCancel(index)">取消关注</span>
      </div>
  </div>
</template>

<script>
import  HeaderNormal from "@/components/HeaderNormal"

export default {
    data(){
        return{
            list:[]
        }
    },
 components: {
        HeaderNormal
    },
    methods:{
        //取消关注
        handleCancel(index){
            // console.log(this.list[index])
            //要取消关注的用户id
            const id = this.list[index].id

            this.$axios({
                url:"/user_follows/" + id,
                //添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                },
            }).then(res => {
                // console.log(res.status)
                if(res.status === 200){
                    //从列表中删除
                    this.list.splice(index,1);
                    this.$toast.success("老铁看着删，已经成功了")
                }
            })
        }
    },
     mounted(){
        // 请求用户关注的列表
        this.$axios({
            url: "/user_follows",
            // 添加头信息
            headers: {
                Authorization: localStorage.getItem("token")
            },
        }).then(res => {
            // console.log(res.data)
            const {data} = res.data;
            // 赋值给关注的列表
            this.list = data;
        })
     }

}
</script>

<style scoped lang="less">
    .follow-item{
        padding: 20px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;

        img{
            display: block;
            width: 60/360*100vw;
            height: 60/360*100vw;
            border-radius: 50%;
        }

        .item-center{
            flex:1;
            padding-left: 10px;
            span{
                font-size: 12px;
                color: #999;
            }
        }

        .cancel{
            display: block;
            background: #ccc;
            padding: 0 20px;
            height: 35px;
            line-height: 35px;
            font-size: 12px;
            border-radius: 50px;
        }
    }
</style>