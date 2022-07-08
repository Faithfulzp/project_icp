<template>
    <section class="shortcut">
        <div class="w">
            <div class="fr">
                <ul>
                    <li><a href="login.html">请先登录</a></li>
                    <li></li>
                    <li><a href="register.html">免费注册</a></li>
                    <li></li>
                    <li><a href="#">我的订单</a></li>
                    <li></li>
                    <li><a href="#">会员中心</a></li>
                    <li></li>
                    <li><a href="#">帮助中心</a></li>
                    <li></li>
                    <li><a href="#">在线客服</a></li>
                    <li></li>
                    <li>
                        <a href="#">
                            <em class="phone"></em>&nbsp;
                            手机版
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Section',
}
</script>

<style scoped>
/* 快捷导航栏 start*/
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #333;
}

.shortcut ul li {
    float: left;
}

/* 选择所有偶数li */
.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666666;
    margin: 9px 15px 0;
}

/* .arrow-icon::after {
    font-family: 'icomoon';
    content: '\e91e';
    margin-left: 5px;
} */

.shortcut .phone {
    display: inline-block;
    width: 11px;
    height: 16px;
    vertical-align: middle;
    background: url(../../public/images/sprites2.png) -40px -70px no-repeat;
}

.shortcut ul li:hover .phone {
    background: url(../../public/images/sprites2.png) -51px -70px no-repeat;
}

/* 快捷导航栏 end*/
</style>