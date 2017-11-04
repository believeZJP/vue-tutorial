<template>
    <div class="page-con-r">
        <h3>
            知乎日报

            <span class="fr mr20p">日期:{{nowDate}}</span>
        </h3>

        <div class="news-con">
            <div v-for="(news, id) in newsList" :key="id" class="mb20p new-item">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="news['images'][0]" class="image">
                    <div class="p20p">
                        <span class="new-title mb5p" :title="news.title">{{news.title}}</span>
                        <div class="bottom clearfix">
                            <span class="time fl">{{ nowDate }}</span>
                            <el-button @click="showDetailsDia(news.id)" type="text" class="button fr">查看详情</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <el-dialog :visible.sync="editVisible">
            <img :src="newsDetails.image" style="width:100%">
            <div v-html="newsDetails.body"></div>
            <div slot="footer" class="dialog-footer">
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import zhihuFetch from '@/utils/zhihuFetch'
    export default {
        data () {
            return {
                editVisible: false,
                editStatus: 'add',
                newsList: [],
                nowDate: '',
                newsDetails: {
                    body: '',
                    image: ''
                }
            }
        },
        created () {
            this.getNewsList()
        },
        methods: {
            getNewsList () {
                zhihuFetch('news/latest', '').then(res => {
                    console.log(res)
                    let d = res.date
                    d = d.substring(0, 4) + '年' + d.substring(4, 6) + '月' + d.substring(6, 8) + '日'
                    this.nowDate = d

                    this.newsList = res.stories
                }).catch(err => {
                    this.$message({
                        message: '请求失败' + err.message,
                        type: 'warning'
                    })
                    console.log(err)
                })
            },
            showDetailsDia (id) {
                this.getNewsContent(id)
            },
            getNewsContent (id) {
                zhihuFetch('news/' + id, '').then(res => {
                    console.log(res)
                    this.newsDetails = res
                    this.editVisible = true
                }).catch(err => {
                    this.$message({
                        message: '请求失败' + err.message,
                        type: 'warning'
                    })
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="scss" scope>
    h3{
        height: 50px;
        margin: 0;
        color: #333;
        font-size: 18px;
        font-weight: 600;
        line-height: 50px;
        padding-left: 20px;
        border-bottom: 1px solid #e1e1e1;
    }
    .new-item{
        display: inline-block;
        width: 260px;
        margin: 30px;
        img{
            width: 260px;
            width: 100%;
            display: block;
        }
        .new-title{
            color: #595959;
            font-size: 18px;
            text-align: left;
            height: 38px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .time{
            line-height: 38px;
            height: 38px;
        }
    }
    .news-con{
        text-align: center;
    }
</style>

// https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
// http://daily.zhihu.com/
// http://anyproxy.io/cn.html
// easy-mock.com