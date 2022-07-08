//引入Vue文件
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
import data from './data'
//应用Vuex插件
Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
    modules: {
        data,
    }
})
