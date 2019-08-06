# css3 动画；


1. 变形：

transform: scale() translate(x, y) skew() rotate();


2. 过渡动画 -> 触发动画
  
  transition: all  1s 0s ease;
 
2. 自执行动画 ->自己能动的动画

animation: 动画名字 1s linear  0s infinite alternate backwards;
<!-- 动画帧 -->
@keyframes 动画名字 {
 0% {}
 1% {}
 100%{}
}

3. 请求动画帧动画

var id = 0;
function animte() {
  j++;
  pro.style.width = j + 'px'; 
  var id = requestAnimationFrame(animte)
  if (j > 300) {
    // 取消动画帧，根据id取消
    cancelAnimationFrame(id)
  }
}

  // 请求动画帧 返回值是一个id
requestAnimationFrame(animte)

