<template>
    <div id="app">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="/">网易云音乐</el-menu-item>
            <el-menu-item v-for="menu in mainMenu" :index="menu.path">{{menu.name}}</el-menu-item>
            <li class="searching">
                <div class="form-group">
                    <input
                        v-model="inputValue"
                        type="text"
                        class="form-control"
                        placeholder="Search"
                    >
                    <a
                        class="searchIcon"
                        @click="searchSong"
                    >
                        <icon name="search"></icon>
                    </a>
                </div>
                <!--<el-card v-show="false" class="box-card">
                    <div v-for="song,index in musicList.songs" :key="index" class="text item">
                        {{ song.name }}
                    </div>
                </el-card>-->
            </li>
            <li class="logining">
                <my-login></my-login>
            </li>
            <li class="registing">
                注册
            </li>
        </el-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import myLogin from '@/components/Login'
    import store from './store'

    export default {
        name: 'app',
        data() {
           return {
               inputValue:'',
               mainMenu: [
                   {
                       name: '发现音乐',
                       path: '/'
                   },
                   {
                       name: '我的音乐',
                       path: '/my'
                   },
                   {
                       name: '朋友',
                       path: '/friend'
                   },
                   {
                       name: '商城',
                       path: '/product'
                   },
                   {
                       name: '音乐人',
                       path: '/recruit'
                   },
                   {
                       name: '下载客户端',
                       path: '/download'
                   }
               ],

           }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo
            }
        },
        components: {
            myLogin
        },
        methods: {
            searchSong(){
                console.log(this.inputValue)
                this.$store.dispatch('searchSong',this.inputValue).then( data => {
                        console.log(data)
                        this.$store.commit('updateSongList',data.result.songs);
//                   跳转到搜索页面
                        this.$router.push('/search/'+ this.inputValue);
                    })
            }
        }
    }

</script>

<style>

    body {
        margin: 0;
    }
    .searching {
        position: relative;
        float: left;
        margin-left: 50px;
        padding-top: 12px;
    }

    .searchIcon {
        position: absolute;
        right: 10px;
        top: 20px;
        color: #3c3c3c;
    }
    .box-card {
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
    .text.item:hover {
        background: #000;
        color: #fff;
    }
    .logining {
        float: left;
        margin-left: 40px;
    }
    .registing {
        float: left;
        margin-left: 15px;
        color: #bfcbd9;
        font: 14px/60px '微软雅黑';
    }

</style>
