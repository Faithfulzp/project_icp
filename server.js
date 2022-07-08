//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();
//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.all('*', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许接收自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //允许接收任何请求方式
    response.setHeader('Access-Control-Allow-Method', '*');
    
    const data = [
        {
            "id": "1",
            "domain":"www.rocky.com",
            "imgUrl": "./images/logo/logo_01.png",
            "ICP": "京ICP备19004658号-1"
        },
        {
            "id": "2",
            "domain":"www.360.com",
            "imgUrl": "./images/logo/logo_02.png",
            "ICP": "京ICP备19004658号-2"
        },
        {
            "id": "3",
            "domain":"www.8848.com",
            "imgUrl": "./images/logo/logo_03.png",
            "ICP": "京ICP备19004658号-3"
        }
    ];
    //设置响应体
    let str = JSON.stringify(data);//发送json数据
    response.send(str);
});
//4、监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中....");
});