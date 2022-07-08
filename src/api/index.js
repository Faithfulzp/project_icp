// 当前这个模块：API进行统一管理
import requests from "./ajax";
import mockRequests from "./mock";

export const reqGetData = () => {
    // 发请求：axios发请求返回结果为promise对象
    return requests.get('http://127.0.0.1:8000');
};
// //mock请求data数据
// export const reqGetData = () => {
//     // 发请求：axios发请求返回结果为promise对象
//     return mockRequests.get('/data');
// };