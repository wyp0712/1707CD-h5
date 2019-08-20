# better-scroll:


## 下拉刷新
1. 开启下拉
    // 最外层大盒子的类名： 作用于大盒子中的第一个子盒子
   var myBS = new BScroll('.main', { 
      click:true, // 
      pullDownRefresh: {
        threshold: 180,
        stop: 90
      },
      pullUpLoad: {
         threshold: 180,
      }
   })
2. 监听
   myBS.on('pullingDown', function() {
     // 更改字体样式
      getData((list) => {
          render(list, 'top')
          // 结束下拉
          myBS.finishPullDown()
          myBS.refresh() 
           // 更改字体样式
      })
   })  

    myBS.on('pullingUp', function() {
     // 更改字体样式
      getData((list) => {
          render(list, 'bottom')
          // 结束下拉
          myBS.finishPullUp()
          myBS.refresh() 
           // 更改字体样式
      })
   })  



# 吸顶  横滚
  scrollX: true
  通过显示隐藏




# better-scroll 


# 下拉刷新  上拉加载


var myBS = new BScroll('.main', {
   // 横滚
   scrollX: true,
   1. // 
   pullDownRefresh: {
      threshold: 180, // 阀值    
      stop: 90 // 回弹 停留
   },
   pullUpLoad: {
       threshold: 180, // 阀值  
   }
})

1. 开启
2. 监听
3. 请求数据并且渲染
4. 结束
5. 刷新 重新dom位置

2. 
myBS.on('pullingDown', function() {
   3. getData((list) =>  {
       renerHTML(list, 'top')
      // 
       4. myBS.finishPullDown();
       5. myBs.refresh()
   })
})

myBS.on('pullingUp', function() {
   3. getData((list) =>  {
       renerHTML(list, 'bottom')
      // 
       4. myBS.finishPullUp();
       5. myBs.refresh()
   })
})


