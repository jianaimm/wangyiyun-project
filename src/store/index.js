
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        userInfo: {
            id: '',
            username: '',
            profile: {
                nickname: '',
                avatarUrl: ''
            }
        },
        songList: {

        }
    },
    mutations: {
        updateUserInfo(state,data){
            state.userInfo = {
                id: data.account.id,
                userName: data.account.userName,
                profile: data.profile
            }
        },
        updateSongList(state,data){
            state.songList = data;
        }
    },
    actions: {
        doLogin(store,data){
            return fetch('/api/login/cellphone?phone='+ data.phone +'&password=' + data.password).then(res => {
                return res.json();
            })
        },
        searchSong(store,data){

            return fetch('/api/search?keywords='+ data )
                .then( res => {
                    return res.json();
                })
        }
    }
});
