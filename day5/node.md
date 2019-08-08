# 单行盒子

html,body {
  width:100%;
  height:100%;
}

@function rem($font) {
  @return $font / 75px  * 1rem;
}

.wrap {
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
}

.header {
  width:100%;
  height: rem(45px *2);
}

.main {
  width: 100%;
  flex:1;
  overflow: auto;
}

.footer {
  width:100%;
  height: 45px;
}


#动画

1. 过渡动画

transition: all 1s 0s linear;


transition-property: all;
transition-duration: 1s;
transtion-delay: 0s;
transtion-timing-function: cubic-bezier(.17,.67,.83,.67);  ease linear;


2. 自执行动画


animation: name 2s 0s linear infinite alternate backwards;

@keframs name{
  0% {

  }
  100% {

  }
}

<!-- 控制动画 -->
animation-play-state: running paused;


3. 请求动画帧动画




# touch


1. mousedown  mousemove  mouseup

2. touchstart  手指按下
   touchmove   手指移动
   touchend    手指抬起 
