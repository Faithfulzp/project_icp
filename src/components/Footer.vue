<template>
      <footer class="footer">
        <div class="footer-bottom">
            <div class="w">
                <div class="mod_service">
                    <ul>
                        <li>
                            <h5 class="service_pic1"></h5>
                            <div class="service_txt">
                                <h4>价格亲民</h4>
                            </div>
                        </li>
                        <li>
                            <h5 class="service_pic2"></h5>
                            <div class="service_txt">
                                <h4>物流快捷</h4>
                            </div>
                        </li>
                        <li>
                            <h5 class="service_pic3"></h5>
                            <div class="service_txt">
                                <h4>品质新鲜</h4>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mod_copyright">
                    <ul class="clearfix">
                        <li><a href="#">关于我们</a></li>
                        <li></li>
                        <li><a href="#">帮助中心</a></li>
                        <li></li>
                        <li><a href="#">售后服务</a></li>
                        <li></li>
                        <li><a href="#">配送与验收</a></li>
                        <li></li>
                        <li><a href="#">商务合作</a></li>
                        <li></li>
                        <li><a href="#">搜索推荐</a></li>
                        <li></li>
                        <li><a href="#">友情链接</a></li>
                    </ul>
                    <div id="mark">
                        <p>{{ICP}}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ["domain","ICP"],
}
</script>

<style scoped>
#mark{
    font-size: 18px;
    color: #fff;
}
.footer {
    padding-top: 5px;
}

.footer-bottom {
    height: 280px;
    padding-top: 40px;
    background-color: #333333;
}
.mod_service {
    height: 100px;
    border-bottom: 1px solid #434343;
}

.mod_service ul {
    display: flex;
    justify-content: space-around;
}

.mod_service ul li {
    width: 270px;
    height: 60px;
    padding-left: 30px;
}

.mod_service ul li h5 {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 8px;
}

.service_pic1 {
    background: url(../../public/images/sprites1.png) no-repeat 0px 0px;
}

.service_pic2 {
    background: url(../../public/images/sprites1.png) no-repeat -67px 0px;
}

.service_pic3 {
    background: url(../../public/images/sprites1.png) no-repeat -135px 0px;
}

.service_txt h4 {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
}

.mod_copyright {
    padding-top: 25px;
}

.mod_copyright ul {
    margin-left: 230px;
    margin-bottom: 15px;
}

.mod_copyright ul li {
    float: left;
    font-size: 12px;
    color: #999;
}

.mod_copyright ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666666;
    margin: 3px 15px;
}

.mod_copyright ul li a {
    color: #999;
}

.mod_copyright p {
    text-align: center;
    line-height: 20px;
}

</style>