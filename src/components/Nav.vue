<template>
    <nav class="nav">
        <div class="w">
            <div class="main">
                <div class="dropdown">
                    <div class="dd-items">
                        <ul>
                            <li><a href="#" class="title">生鲜</a><a href="#">水果</a><a href="#">蔬菜</a></li>
                            <li><a href="#" class="title">美食</a><a href="#">面点</a><a href="#">干果</a></li>
                            <li><a href="#" class="title">电器</a><a href="#">数码产品</a></li>
                            <li><a href="#" class="title">居家</a><a href="#">床品</a><a href="#">四件套</a><a href="#">被枕</a>
                            </li>
                            <li><a href="#" class="title">洗护</a><a href="#">洗发洗护</a><a href="#">美妆</a></li>
                            <li><a href="#" class="title">孕婴</a><a href="#">奶粉</a><a href="#">玩具</a><a href="#">辅食</a>
                            </li>
                            <li><a href="#" class="title">餐橱</a><a href="#">数码产品</a></li>
                            <li><a href="#" class="title">服饰</a><a href="#">男装</a><a href="#">女装</a></li>
                            <li><a href="#" class="title">杂货</a><a href="#">户外</a><a href="#">图书</a></li>
                            <li><a href="#" class="title">品牌</a><a href="#">品牌制造</a></li>
                        </ul>
                    </div>
                </div>
                <!-- 轮播图 -->
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../../public/images/banner_1.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../public/images/banner_2.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../public/images/banner_3.png" alt=""></div>
                        <div class="swiper-slide"><img src="../../public/images/banner_4.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="../../public/images/banner_5.jpg" alt=""></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>

                    <!-- 如果需要导航按钮 -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'Nav',
    mounted() {
        var mySwiper = new Swiper('.swiper', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                // 分页器
                clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }
}
</script>

<style scoped>
/* nav导航栏制作 Start*/
.nav {
    background-color: #f2f2f2;
}

.main {
    position: relative;
}

/* 商品分类 */
.dropdown .dd-items {
    position: relative;
    width: 210px;
    height: 465px;
    margin-top: 2px;
    background-color: #000;
    /* 透明度 */
    opacity: 0.9;
    z-index: 999;
}

.dropdown .dd-items ul li {
    height: 46px;
    line-height: 46px;
    padding-left: 30px;
}

.dropdown .dd-items ul li:hover {
    background-color: #27ba9b;
}

.dropdown .dd-items ul li::after {
    content: '\e920';
    font-family: 'icomoon';
    position: absolute;
    right: 10px;
    font-size: 14px;
    color: #fff;
}

.dropdown .dd-items ul li a {
    margin-left: 3px;
    font-size: 12px;
    color: #fff;
}

.dropdown .dd-items .title {
    font-size: 16px;
}

/* 轮播图 */
.main .swiper {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1000px;
    height: 465px;
    overflow: hidden;
}

.swiper-wrapper .swiper-slide img {
    width: 100%;
    height: 100%;
}

/* nav导航栏制作 end*/
</style>