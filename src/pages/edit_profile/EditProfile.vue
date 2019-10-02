<template>
<!-- 编辑资料页面 -->
  <div>
      <!-- 头部 -->
      <HeaderNormal title="编辑资料"/>
      <!-- 头像 -->
      <div class="head">
          <img :src=" profile.head_img " alt="">
          <!-- vant上传组件 -->
        <van-uploader :after-read="afterRead" class="uploader"/>
      </div>

      <!-- 调用条形组件 -->
      <CellBar lable="昵称" :text="profile.nickname" @click="show1 = !show1"/>

      <!-- 昵称编辑输入框 -->
      <!-- 鼠标放到属性上就可以查看 -->
      <van-dialog
        v-model="show1"
        title="编辑昵称"
        show-cancel-button
        @confirm="handlNickname"
        >
        <!-- value读取昵称 -->
        <van-field :value="profile.nickname" placeholder="请输入用户名"  ref="nickname"/>
      </van-dialog>

      <CellBar lable="密码" :text="profile.password" type="password"  @click="show2 = !show2"/>

      <!-- 密码编辑输入框 -->
     <van-dialog
        v-model="show2"
        title="编辑密码"
        show-cancel-button
        @confirm="handlPassword"
        >
        <!-- value读取昵称 -->
        <van-field :value="profile.password" placeholder="请输入密码" ref="password"/>
     </van-dialog>

      <CellBar lable="性别" :text="profile.gender === 1 ? '男' : '女'"  @click="show3 = !show3"/>

       <!-- 性别编辑输入框 -->
     <van-dialog
        v-model="show3"
        title="编辑性别"
        show-cancel-button
        @confirm="handlGender"
        >
        <van-radio-group v-model="genderCache">
            <van-cell-group>
                <van-cell title="男" clickable @click="genderCache = `1`">
                    <van-radio slot="right-icon" name="1" />
                </van-cell>
                <van-cell title="女" clickable @click="genderCache = `0`">
                    <van-radio slot="right-icon" name="0" />
                </van-cell>
            </van-cell-group>
        </van-radio-group>
     </van-dialog>
  </div>
</template>

<script>
//导入头部
    import config from "./edit_profile";
    export default config;
</script>

<style scoped lang="less">
  
    @import url("edit_profile.less");
</style>