import { reqGetData } from "@/api";
export default {
    namespaced: true,
    //书写业务逻辑,和向服务器获取数据
    actions: {
        // 通过API里面的接口函数调用，向服务器发送请求，获得数据
        async getData(context) {
            let result = await reqGetData();
            // for (i = 0; i < result.length; i++){
                
            // }
            context.commit('DATA', result);
        },
    },
    //操作state
    mutations: {
        DATA(state, data) {
            state.dataList = data;
        },
    },
    //state：存储仓库数据
    state: {
        dataList: [],
        // backColor: '',
        

    },
    //理解为计算属性，用于简化仓库仓库数据，便于组件获取
    getters: {},
}

