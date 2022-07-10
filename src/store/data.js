import { reqGetData } from "@/api";
export default {
    namespaced: true,
    //书写业务逻辑,和向服务器获取数据
    actions: {
        // 通过API里面的接口函数调用，向服务器发送请求，获得数据
        async getData(context) {
            let result = await reqGetData();
            context.commit('DATA', result);
            /* let beianhao = [];
            let beijing = [];
            let logo = [];
            let yuming = [];
            for (i = 0; i < result.length; i++){
                beianhao = reslut[i].ICP;
                beijing = reslut[i].backColor;
                logo = reslut[i].imgUrl;
                yuming = reslut[i].domain;
            }
            context.commit('ICP', result);
            context.commit('LOGO', result);
            context.commit('DOMAIN', result);
            context.commit('BCAKCOLOR', result); */
        },
    },
    //操作state
    mutations: {
        DATA(state, data) {
            state.dataList = data;
        },
        /* ICP(state, data) {
            state.icp = data;
        }, */
    },
    //state：存储仓库数据
    state: {
        dataList: [],
        // backColor: '',
        // icp: '',
        // domain: '',
        // imgUrl:''
    },
    //理解为计算属性，用于简化仓库仓库数据，便于组件获取
    getters: {},
}

