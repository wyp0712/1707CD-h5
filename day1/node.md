# scss

  1. 嵌套

  2. 引入  注意事项当前文件夹

  3. 变量

  4. 混合宏

  5. 占位继承



# 响应式布局 之 媒体查询

<style>

// 如果文档宽度小于 300 像素则修改背景颜色(background-color):
@media screen and (max-width: 300px) {
    body {  
        background-color:lightblue;
    }
}

<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">


@media mediatype and|not|only (media feature) {
    CSS-Code;
}


方向指定了设备处于横屏（宽度大于宽度）模式还是竖屏（高度大于宽度）模式

　　值：landscape(横屏) | portrait(竖屏)


@media all and (min-width: 700px) and (orientation: landscape) { ... }

@media (min-width: 700px) and (orientation: landscape) { ... }

</style>

#meta

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

这句话在于对响应式网页做一个初始化设置，主要包括：

name="viewport"：标记显示设备为视口；
width = device-width：宽度等于当前设备的宽度；
initial-scale：初始的缩放比例（默认设置为1.0）；
minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）；
maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）；   
user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）。


2.解决IE浏览器的兼容性问题：
因为IE浏览器(IE8)不支持HTML5和CSS3中的media，所以要加载用于解决IE浏览器兼容性问题的JS文件：

<!--[if lt IE 9]>

<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>

<![endif]-->
3.设置IE的渲染方式为最高：
现在有很多人的IE浏览器都升级到IE9以上，这个时候会有很多诡异的事情发生，例如现在是IE9的浏览器，但是浏览器的文档模式却是IE8，为了防止这种情况，我们需要下面这段代码来让IE的文档模式永远都是最新：

<meta http-equiv="X-UA-Compatible"content="IE=edge">

@media screen and (min-width:960px) and(max-width:1200px){
　　body{

　　　　background:yellow;

　　}
}

6.总体开发思路：

 

使用CSS3中媒体查询的大致思路就是判断网页在不同设备中所处的宽度范围，这样的范围可能有三种（PC、平板、手机），也可能有四种（PC、平板、中大屏手机、小屏手机），当然也可能只需要两种（平板、手机，PC端单独开发一版时可不作为CSS3媒体查询的使用对象），并为各种宽度范围情况下的所需页面元素套用不同的CSS样式，从而适配各种设备。

7.响应式网页开发中的宽度问题：

在实际开发中，通常需要设置响应式网页宽度的最大值，一旦忽略最大宽度，臃肿或零散的网页布局都会造成视觉洪灾，也就是我们常说的看起来很low。
另外谈谈目前显示设备中的网页宽度问题（由于篇幅问题，就不从工业革命开始扯了），目前最为常见的宽度基本上都是：大于或等于960px的PC端（1920px、1600px、1440px、1280px、1140px、960px）、960px至640px之间的平板端（768px、640px）以及640px以下的手机端（480px、320px），以上宽度存在已久，且显示设备中的网页宽度会长期处于这样的状态下，在响应式网页宽度设计上，基本从这几个尺寸考虑就已经足够。