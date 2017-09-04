<template>
    <div class="index">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in carousel" :key="item">
                <img :src="item"/>
            </el-carousel-item>
        </el-carousel>
        <el-row :gutter="24">
            <el-col :span="20" :offset="2">
                <div class="grid-content bg-purple">
                    <el-tabs>
                        <el-tab-pane label="推荐歌单" name="first">推荐歌单</el-tab-pane>
                    </el-tabs>
                </div>
                <el-row>
                    <el-col :span="5" v-for="newSong,index in newSongs" :key="newSong.id" :offset="index%4 == 0 ? 0 : 1" class="el-col">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="newSong.picUrl" class="image">
                            <div style="padding: 14px;">
                                <p class="description">{{ newSong.name }}</p>
                                <div class="bottom clearfix">
                                    <time class="time">{{ newSong.playCount | format }}</time>
                                    <router-link :to="{name: 'Personalized',params: { id: newSong.id }}" class="button"> 查看歌单 </router-link>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>

    </div>
</template>

<script>
    import format from '@/filters/format';
    export default {
        name: 'Index',
        data(){
            return {
                carousel: [],
                newSongs: []
            }
        },
        created(){
        //在config目录下面的 index.js里的dev - proxyTable（配置代理信息）里有配置访问路径；
        //fetch() 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 promise 对象，resolve 对应请求的 Response。
            fetch('/api/personalized').then(response => {
                return response.json();
            }).then( data => {
//                console.log(data);
                this.newSongs = data.result;
            });
            fetch('/api/banner').then(response => {
                return response.json();
            }).then( data => {
//                console.log(data.banners)
                data.banners.forEach(banner => {
                    this.carousel.push(banner.pic);
                })

            })
        },
        filters: {
            format
        }
    }


</script>

<style>
    .el-col {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .description {
        /*在第二行省略，必须是块元素，不能是转化的块*/
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>
