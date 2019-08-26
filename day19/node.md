# 滚动条不滚动的问题：better-scroll

1.  找最外层大盒子的是否加了overflow:hidden;
2.  
   三层盒子： 

   <div class=main>  必须 有宽高  flex:1  不准开弹性盒子
     <div class=content>  只能有宽 不能有高 不准开弹性盒子
      <div class=top-tip>下拉刷新</div>
      <div class=con>
       内容
      </div>
      <div class=bottom-tip>上拉加载</div>
     </div>
   </div>
 scrollToElement(el, time)  