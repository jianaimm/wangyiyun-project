<template>
    <div class="personalized">
        <el-row :gutter="24">
            <el-col :span="22" :offset="1">
                <div class="clearfix introduce" >
                    <img class="cover" :src="playList.coverImgUrl"/>
                    <div class="musicDetail">
                        <h4>{{ playList.name }}</h4>
                        <p style="overflow: hidden">
                            <img style="float: left" class="protrait" :src="playList.creator && playList.creator.avatarUrl"/>
                            <span style="float:left;width: 70%;margin-left: 10px">
                                <span style="display: block">{{ playList.creator && playList.creator.nickname }}</span>
                                <span style="display: block">创建于
                                    <time>
                                        <icon name="clock-o"></icon>
                                    {{ playList.createTime | formatDate('y年m月d日 h:i:s')}}
                                    </time>
                                </span>
                            </span>
                        </p>
                        <p>
                            <el-button type="primary" icon="edit"></el-button>
                            <el-button type="primary" icon="share">分享</el-button>
                            <el-button type="primary" >
                                <i class="el-icon-star-on"></i>
                                <span>收藏</span>
                            </el-button>
                            <el-button type="primary" icon="search">搜索</el-button>
                        </p>
                        <div>
                            <span>标签：</span>
                            <span class="tag" v-for="tag,index in playList.tags" :key="index">{{tag}}</span>
                        </div>
                        <p class="description">介绍：{{ playList.description }}</p>
                    </div>

                </div>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="20" :offset="2">
                <el-tabs v-model="activeName" >
                    <el-tab-pane label="歌曲列表" name="list">

                        <ul class="list">
                            <!--key 是为了不让li 复用，添加不同的key来区分，防止冲突-->
                            <li v-for="track,index in showList" :key="track.id">
                                <span>{{ index+1+start }}</span>
                                <span>{{track.name}}</span>
                                <span class="icon">
                                    <a href="javascript:;" @click="play(track.id)">
                                        <icon name="play"></icon>
                                    </a>
                                    <a href="javascript:;" >
                                        <icon name="heart"></icon>
                                    </a>
                                    <a href="javascript:;">
                                        <icon name="trash"></icon>
                                    </a>
                                </span>

                            </li>
                        </ul>
                        <!--分页-->
                        <my-page :totalCount.number="totalCount"
                                 :limit.number="limit"
                                 :start.sync="start"
                                 :end.sync="end"
                        >
                        </my-page>

                    </el-tab-pane>
                    <el-tab-pane label="评论" name="comment">
                        <div class="messages clearfix" v-for="message in messages" :key="message.commentId" >
                            <img class="userAvatar" :src="message.user.avatarUrl"/>
                            <div class="userMessage">
                                <p>
                                    <a href="javascript:;">{{ message.user.nickname}}</a>
                                    <span class="messageCon">评论：{{ message.content }}</span>
                                </p>

                                <p class="clearfix content">
                                    <time class="left">{{ message.time | formatDate('y年m月d日 h:i:s')}}</time>
                                    <span class="right">
                                        <span class="el-icon-share"></span>
                                        <span class="share">{{ message.likedCount}}</span>
                                        <a href="javascript:;">回复</a>
                                    </span>
                                </p>
                            </div>

                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <audio class="audio" :src="musicUrl" autoplay controls></audio>
        <!--播放控制台-->
        <my-audio></my-audio>
    </div>

</template>
<script>
    import myPage from '@/components/Page';
    import formatDate from '@/filters/formatDate';
    import myAudio from '@/components/Audio';

    export default {
        name: 'Personalized',
        data() {
          return {
              activeName: 'list',
              playList: {
                  name: '正在获取中......'//歌单详情
              },
              messages: {},//歌单歌曲列表
              musicUrl: '',//歌曲链接
              isPlay: false,//是否播放
              totalCount: 0,//记录歌单总条数；
              limit: 20,//每页显示条数
              start: 0,//从第一条开始显示
              end: 20, //显示到第几条
              nowPlay: ''
          }
        },
        computed: {
            showList(){
                let nowList = this.playList.tracks || [];
                return nowList.slice(this.start,this.end);
            }
        },
        components: {
            myPage,
            myAudio
        },
        created(){// 生命周期钩子函数
//            console.log(this.$route.params.id)
            fetch('/api/playlist/detail?id='+this.$route.params.id).then(response => {
                return response.json();
            }).then(res => {
//                console.log(res.playlist);
                this.playList = res.playlist;
                this.totalCount = res.playlist.tracks.length;

            });
            fetch('/api/comment/playlist?id='+ this.$route.params.id).then(res => {
                return res.json();
            }).then(result => {
//                console.log(result)
                this.messages = result.comments;
            });

        },
        filters: {
            formatDate
        },
        methods: {
            play(id){
                this.isPlay = true;
                fetch('/api/music/url?id=' + id).then(res => {
                    return res.json();
                }).then(result => {
//                    console.log(result)
                    this.musicUrl = result.data[0].url;//当前歌曲链接
//                    console.log(this.musicUrl)
                    this.nowPlay = result.data[0].id;//当前点击的是第几个的id;
                });
            },
            pause(id){
                this.isPlay = false;

            }
        }
    }
</script>
<style>
    p {
        margin: 5px 0;
    }
    .personalized {
        /*position: relative;*/
        height: 500px;
        line-height: 26px;
    }
    .introduce {
        padding: 25px;
    }
    .cover {
        float: left;
        width: 120px;
        height: 120px;
    }
    .musicDetail {
        float: left;
        margin-left: 20px;
        width: 60%;
    }
    .musicDetail p * {
        vertical-align: middle;
        font-size: 16px;
    }
    h4 {
        margin: 0;
        line-height: 26px;
    }
    .protrait,
    .userAvatar {
        vertical-align: top;
        width: 60px;
        height: 60px;
    }
    .tag {
        margin: 0 3px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .list li {
        padding: 0 10px 0 20px;
        font: 14px/36px arial,'微软雅黑';
        color: gray;
    }
    .list li:hover {
        background: #0f0f0f;
        color: #fff;
    }

    .icon {
        float: right;
        margin-right: 20px;
    }
    .icon * {
        margin: 0 5px;
        color: gray;
    }

    .messages {
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
    }
    .userAvatar {
        float: left;
    }
    .left {
        float: left;
    }
    .right {
        float: right;

    }
    .content {
        overflow: hidden;
    }
    .userMessage {
        float: left;
        padding-left: 10px;
        box-sizing: border-box;
        line-height: 26px;
        font-size: 12px;
        width: 80%;
    }
    .share {
        margin: 0 10px 0 5px;
    }
    .description {
        font-size: 13px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        height: 104px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .audio {
        position: absolute;
        left: 50%;
        top: 300px;
        width: 200px;
        height: 100px;
    }
</style>
