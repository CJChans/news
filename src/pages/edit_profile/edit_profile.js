import HeaderNormal from "@/components/HeaderNormal";
import CellBar from "@/components/CellBar";
export default {
    data() {
        return {
            //用户详情
            profile: {},
            //昵称弹窗
            show1: false,
            //密码弹窗
            show2: false,
            //性别弹窗
            show3: false,

            genderCache: `0`
        }
    },
    components: {
        HeaderNormal,
        CellBar
    },
    methods: {
        //请求编辑资料的接口
        //data要提交给接口的数据
        editProfile(data, callback) {
            if (!data) return;
            this.$axios({
                url: '/user_update/' + localStorage.getItem("user_id"),
                method: 'post',
                //添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                data

            }).then(res => {
                // console.log(res)
                const status = res.status;

                //成功的弹窗提示
                if (status === 200) {
                    //传入的回调函数
                    //等于callback && callback();
                    if (callback) {
                        callback();
                    }
                    this.$toast.success("修改成功了");
                }
            })
        },

        //选择完图片之后的回调函数，file返回选中的图片
        afterRead(file) {
            //构造表单数据
            const formData = new FormData();
            //通过表单使用append方法追加数据
            formData.append('file', file.file);

            this.$axios({
                url: "/upload",
                method: 'post',
                //添加头信息
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                //把表单数据上传到服务器
                data: formData
            }).then(res => {
                // console.log(res)
                //把data解析出来
                const { data } = res.data;

                //替换用户资料的头像
                this.profile.head_img = this.$axios.defaults.baseURL + data.url;

                this.editProfile({ head_img: data.url })

            })
        },

        //编辑昵称
        handlNickname() {
            //拿到input输入框的值
            // console.log(this.$refs.nickname)
            const value = this.$refs.nickname.$refs.input.value;
            this.editProfile({ nickname: value }, () => {
                this.profile.nickname = value;
            })
        },

        //编辑密码
        handlPassword() {
            //拿到input输入框的值
            // console.log(this.$refs.password)
            const value = this.$refs.password.$refs.input.value;
            //提交到编辑资料的接口
            this.editProfile({ password: value }, () => {
                this.profile.password = value;
            })
        },

        //编辑性别
        handlGender() {
            // console.log(this.$refs.gender)
            // 把性别装换为数字
            const gender = +this.genderCache;
            this.editProfile({ gender }, () => {
                // 修改成功之后替换页面显示的性别
                this.profile.gender = gender
            })

        }
    },
    mounted() {
        //请求个人资料接口
        this.$axios({
            url: "/user/" + localStorage.getItem("user_id"),
            //添加头信息
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(res => {

            const { data } = res.data;
            if (data) {
                this.profile = data;
                //  console.log(this.profile);
                //把后台返回的性别赋值给genderCache
                this.genderCache = String(this.profile.gender)
                    //如果用户有头像
                if (data.head_img) {
                    this.profile.head_img = this.$axios.defaults.baseURL + data.head_img
                } else {
                    this.profile.head_img = "../../static/20150108164231_t432j.png";
                }
            }
        })
    }
}