// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //如果导入的是node-modules里的包，那么就不需要加'/'，直接引入包名就可以；
import 'element-ui/lib/theme-default/index.css'
import 'vue-awesome/icons/flag'//从node-modules中引入vue-awesome的字体图标库；
import 'vue-awesome/icons' //从node-modules中引入vue-awesome的图标库
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap；
//引入仓库store的文件，'./store/index.js'，由于Vue默认index.js可以省略不写，故是'./store';
import store from './store'

Vue.config.productionTip = false;//是否用于生产环境；

Vue.use(ElementUI);//使用ElementUI组件
Vue.component('icon', Icon); //全局组件；

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App,Icon }//局部组件
})
/*Vue.filter('fa',function (val) {

})*/
