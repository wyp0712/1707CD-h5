# 复习




# rem
 
 px:
 em：相对单位： 相对于父元素
 rem： 相对单位：相对于根节点字体大小  html { font-size:100px }


 html {
   font-size: 50px;
 }

 .box {
   width: 1rem
 }


 #flexible.js 用法

 1. 头部引入
   <script src="./lib/flexible.js"></script>
2. 去meta   
<meta name="viewport" content="width=device-width, initial-scale=1.0">

3. 在scss 中定义函数

@function rem($font) {
  @return $font / 75px * 1rem;
};

rem(80px);
rem(40px *2);



#swiper 轮播

link swiper.css

 <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./img/banner.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./img/banner2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./img/banner.jpg" alt="">
    </div>
  </div>
</div>


script swiper.js


new Swiper('.swper-container', {})