# canvas

1. 设置宽高  js  行内
2. 点 
    var api = myCanvas.getContext('2d');   
     api.moveTo()

3. 线

    api.lineTo()

4. 面
   矩形
   fillRect(x, y, width, height)

   圆
   api.arc(x, y, r, 0, Math.PI*2);


5. globalCompositeOperation




# canvas

1. 设置宽高、 js设置属性 myanvas.width =   mycanvas.height   行内属性设置

2. 点  

  moveTo
3. 线 
  lineTo

4. 面

  fillRect(x, y, width, height)

  arc(x, y, r, 0, Math.PI*2)

5. stroke()

   fill()   


6. 在同一个页面有多个图形的时候，多个图形之间不受影响

  api.save()    // 保存状态
  api.restore() // 恢复状态

7. api.beginPath() // 开始绘制
   api.closePath() // 闭合路径

