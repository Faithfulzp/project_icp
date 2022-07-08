import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueRouter from 'vue-router'
import router from './router'
import "swiper/css/swiper.css";
import '@/mock/mockServer'
Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;//绑定全局事件总线
  }
})