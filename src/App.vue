<template>
    <div>
        <Section></Section>
        <Header :domain="domain" :imgUrl="imgUrl"></Header>
        <Nav></Nav>
        <Footer :domain="domain" :ICP="ICP"></Footer>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import { reqGetData } from "@/api";
export default {
    name: 'App',
    components: {
        Footer,
        Nav,
        Header,
        Section
    },
    data() {
        return {
            domain: document.domain,
            imgUrl: '',
            ICP:'',
        }
    },
    methods: {
        async getData() {
            let result = await reqGetData();
            for (let i = 0; i < result.length; i++) {
                if (result[i].domain === this.domain) {
                    this.imgUrl = result[i].imgUrl;
                    this.ICP = result[i].ICP;
                }
            }
        }
    },
    mounted() {
        this.getData();
    },
}
</script>

<style>
/* 声明字体图标 这里是放在css文件里，应该修改路径到html目录里去 */
@font-face {
    font-family: 'icomoon';
    src: url('../public/fonts/icomoon.eot?tomleg');
    src: url('../public/fonts/icomoon.eot?tomleg#iefix') format('embedded-opentype'),
        url('../public/fonts/icomoon.ttf?tomleg') format('truetype'),
        url('../public/fonts/icomoon.woff?tomleg') format('woff'),
        url('../public/fonts/icomoon.svg?tomleg#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* 版心 */
.w {
    width: 1000px;
    margin: 0 auto;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.style_green {
    color: #27ba9b;
}

/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0;
    /* css3盒子模型 */
    box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}

/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
    cursor: pointer
}

a {
    color: #dcdcdc;
    text-decoration: none
}

a:hover {
    color: #27ba9b;
}

button,
input {
    /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    /* 默认有灰色边框我们需要手动去掉 */
    border: 0;
    outline: none;
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
</style>
