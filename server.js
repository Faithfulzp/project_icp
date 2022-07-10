//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
// // 告诉服务器去哪里找静态资源文件
// const path = require('path');
// app.use(express.static(path.join(__dirname, '/public')));
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
            "backColor": "green",
            "domain": "127.0.0.1",
            "imgUrl": 'logo_1.png',
            "ICP": "京ICP备19004658号-1"
        },
        {
            "id": "1",
            "backColor": "green",
            "domain": "localhost",
            "imgUrl": "logo_1.png",
            "ICP": "京ICP备19004658号-1"
        },
        {
            "id": "1",
            "backColor": "green",
            "domain": "www.rocky.com",
            "imgUrl": "logo_1.png",
            "ICP": "京ICP备19004658号-1"
        },
        {
            "id": "2",
            "backColor": "yellow",
            "domain": "www.360.com",
            "imgUrl": "logo_2.png",
            "ICP": "京ICP备19004658号-2"
        },
        {
            "id": "3",
            "backColor": "red",
            "domain": "www.8848.com",
            "imgUrl": "logo_3.png",
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