// 引入mockjs模块
import Mock from "mockjs";
// 把json数据格式引入
import data from './data.json';
//mock数据：第一个参数为请求地址，第二个参数：请求数据
Mock.mock("/mock/data",{code:200,data:data})