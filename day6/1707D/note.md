
#动画

1. 过渡动画：
transition: all 1s 0s linear;

transition-property: all;

// 有事件的地方用他  配合js 使用


自执行动画：

animation: name 1s;
@keframes name {

}

3. 请求动画帧

    var id;
    function animte() {
      j++;
      progress.style.width = j + 'px';
      id = requestAnimationFrame(animte)
      if (j >= 200) {
        cancelAnimationFrame(id)
      }
    }

    // 获取当前系统时间；
    requestAnimationFrame(animte)

 

# touch





