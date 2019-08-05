# 复习  弹性盒子

布局：

父盒子： 

display:flex; 默认横轴
flex-direction: column; // column-reverse

  

子盒子：  



# 今天学习的新内容：

适配机型：iphone6 7 8

em: 相对单位：相对于父元素
rem 相对单位：相对于根元素 字体大小 的变化而变化

 html {
   font-size: 50px;
 }


 .box {
   // 1rem = 50px;
   width: 1rem;
 }


  // swiper轮播图swiper 用法

  <div class=swiper-container>
    <div class=swiper-wrapper>// 内容盒子
       <div class=swiper-slide>
          <img src=""> 
       </div>
       <div class=swiper-slide>
          <img src=""> 
       </div>
       <div class=swiper-slide>
          <img src=""> 
       </div>
    </div>
  </div>

1. link swiper.css 
2. script  swiper.js
3. new Swiper('.swiper-container')


# 排版

1. 在头部引入
  <script src="./flexible.js"></script>

2. 把原来有的meta 标签删除
<meta name="viewport" content="width=device-width, initial-scale=1.0">

3. 写函数

@function rem($font) {
  // 45px / 75px
  @return $font * 2 / 75px * 1rem;
}

4. 排版中所有的px 全部用rem代替
rem(40px)



移动开发：
application 应用程序接口：
原生APP：native app
      IOS：
        Object-c  icloud
      安卓：
        java
      window phone
webApp: 
   js

混合App: Hybird App

  原生框架 嵌套H5页面；


微信开发：

  小程序： 1M   2M

  公众号：
