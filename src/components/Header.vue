<template>
    <header class="header w">
        <!-- logo制作 -->
        <!-- v-if="dataList[0]" -->
        <div class="logo" v-if="imgUrl">
            <img :src="require('../../public/images/logo/'+ imgUrl)">
        </div>
        <!-- hotwords 热点词模块制作 -->
        <div class="hotwords">
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">生鲜</a></li>
                <li><a href="#">美食</a></li>
                <li><a href="#">餐厨</a></li>
                <li><a href="#">电器</a></li>
                <li><a href="#">居家</a></li>
                <li><a href="#">洗护</a></li>
                <li><a href="#">孕婴</a></li>
                <li><a href="#">服装</a></li>
            </ul>
        </div>
        <!-- search 搜索框 -->
        <div class="search">
            <button>
                <div class="search-btn"></div>
            </button>
            <input type="search" name="" id="" placeholder="搜一搜">
        </div>
        <!-- shopcar购物车 -->
        <div class="shopcar">
            <a href="#"></a>
            <i class="count">2</i>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ["domain","imgUrl"],
}
</script>

<style scoped>
/* header头部模块 start*/
.header {
    position: relative;
    height: 100px;
    background-color: #fff;
}

.logo {
    position: absolute;
    top: 25px;
    width: 171px;
    height: 61px;
}
.logo img {
    margin-left: 10px;
    width: 100%;
    height: 100%;
}
.hotwords {
    position: absolute;
    top: 35px;
    left: 210px;
}

.hotwords ul {
    float: left;
}

.hotwords ul li {
    float: left;
    text-align: center;
    font-size: 14px;
}

.hotwords a {
    display: block;
    width: 60px;
    height: 45px;
    line-height: 45px;
    color: #333;
}

.hotwords a:hover {
    border-bottom: 2px solid #27ba9b;
    color: #27ba9b;
}

.search {
    position: absolute;
    right: 50px;
    top: 40px;
    width: 150px;
    height: 36px;
    border-bottom: 2px solid #e7e7e7;
}

.search:hover {
    border-bottom: 2px solid #27ba9b;
}

.search input {
    float: left;
    padding-left: 5px;
    width: 130px;
    height: 32px;
}

.search button {
    float: left;
    width: 20px;
    height: 32px;
    background-color: #fff;
}

.search .search-btn {
    width: 19px;
    height: 18px;
    background: url(../../public/images/sprites1.png) -83px -72px no-repeat;
}

.shopcar {
    position: absolute;
    top: 48px;
    right: 5px;
    width: 24px;
    height: 24px;
    background: url(../../public/images/sprites1.png) -124px -72px;
}

.count {
    position: absolute;
    top: -5px;
    left: 17px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    background-color: #e26237;
    padding: 0 5px;
    border-radius: 7px 7px 7px 0;
}

/* header头部模块 end*/
</style>