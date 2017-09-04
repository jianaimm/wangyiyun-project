<template>

    <div class="s_search">
       <!-- <div class="searchBar">
            <input
                :value="searchText"
                @input="recommendMusic"
                placeholder="请输入搜索内容"
                type="text"
            />
            <span
                @click="searchMusic"
                class="searchBtn">
                <icon name="search"></icon>
            </span>

            &lt;!&ndash;<el-card v-show="searchText" class="box-card">&ndash;&gt;
                &lt;!&ndash;<div v-for="song,index in songList" :key="index" class="text item">&ndash;&gt;
                    &lt;!&ndash;{{ song.name }}&ndash;&gt;
                    &lt;!&ndash;</div>&ndash;&gt;
            &lt;!&ndash;</el-card>&ndash;&gt;
        </div>-->
        <el-row class="searchList">
            <el-col :span="20" :offset="2">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="单曲" name="first"></el-tab-pane>
                    <el-tab-pane label="专辑" name="second">专辑</el-tab-pane>
                    <el-tab-pane label="MV" name="third">MV</el-tab-pane>
                    <el-tab-pane label="歌单" name="fourth">歌单</el-tab-pane>
                    <el-tab-pane label="歌词" name="firth">歌词</el-tab-pane>
                </el-tabs>
                <p>
                    <el-button type="primary">播放</el-button>
                    <el-button>收藏</el-button>
                    <el-button>下载</el-button>
                    <el-button>批量操作</el-button>
                </p>

                <el-row class="searchNav" >

                    <el-col :span="9">
                        <div class="grid-content bg-purple-light">
                            歌曲
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            歌手
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple-light">
                            专辑
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            时长
                        </div>
                    </el-col>
                </el-row>
                <el-row class="songList" v-for="song,index in songList" :key="index" >

                    <el-col :span="9">
                        <div class="grid-content bg-purple-light">
                            {{ song.name }}
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <span class="grid-content bg-purple" v-for="singer in song.artists">
                            {{ singer.name }}
                        </span>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple-light">
                            {{ song.album.name }}
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            {{ song.duration | duration}}
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    import duration from '@/filters/duration'

    export default {
        name: 'search',
        data(){
            return {
                activeName: 'first'
            }
        },
        computed: {
            songList(){
                return this.$store.state.songList
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        filters: {
            duration
        },
        created(){
//            如果在router文件下的index.js里配置了动态路由，那么就可以通过this.$route.params拿到里面传的数据；
            console.log(this.$route.params.value)
            /*var arr = window.location.href.split('/');
            console.log(arr[arr.length-1])*/
        }
    }
</script>
<style>
    .s_search {
        position: relative;
        padding: 30px;
        font: 14px/40px arial,'微软雅黑';
    }
    .songList:hover {
        background: rgba(0,0,0,.6);
        color: #fff;
    }
    .searchNav .el-col:first-child,
    .songList .el-col:first-child {
        text-indent: 10px;
    }

    /*.searchBar {
        position: relative;
        width: 100%;
        height: 160px;
    }
    .searchBar input {
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 0 5px;
        transform: translate(-50%,-50%);
        width: 300px;
        height: 40px;
        font: 14px/40px arial,'微软雅黑';
        color: #8391a5;
        border: 2px solid #8391a5;
        border-radius: 3px;
    }
    .searchBar input::placeholder {
        text-align: center;
    }
    .searchBar .searchBtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(120px,-7px);
        color: #3c3c3c;
        cursor: pointer;
    }
    .searchBar .box-card {
        position: absolute;
        left: 0;
        top: 50px;
        padding: 15px 0;
        width: 400px;
        z-index: 9;
        line-height: 36px;
    }
    .el-card__body {
        padding: 0;
        text-indent: 20px;
    }
*/

</style>
