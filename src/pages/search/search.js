// 文章列表模块的组件
import PostCard from "@/components/PostCard";

export default {
    data() {
        return {
            // 搜索的关键字
            keyword: "",
            // 文章的列表
            list: []
        }
    },
    components: {
        PostCard
    },
    methods: {
        // 处理搜索
        handleSearch() {
            this.$axios({
                url: `/post_search?keyword=${this.keyword}`
            }).then(res => {
                const { data } = res.data;
                // 赋值给list
                this.list = data;
            })
        }
    }
}