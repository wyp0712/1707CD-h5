# pie：

 var deg = Math.PI / 180

 1. 扇形图

 2. 改变圆心坐标： api.translate(250, 250);
   
 3. 计算总数： totalcount  

 4. 计算每一个扇形的度数 currentDeg =  item.count / totalcount * 360 * deg;


 5. 绘制图形：
    
   api.save()
   api.beginPath() 
   api.arc(0, 0, r, 0, per, per + currentDeg)

   per += currentDeg

 6. 找三个点

   第一个点： 每一个扇形的中心点

   第二个点： 每一个大圆扇形的中心点

   第三个点： 判断 x 坐标正负  左 - 30 右边 + 30  y
         