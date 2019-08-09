
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



# json ：js对象表示法：    用来前后端进行交互的；前端  和  后端  之间进行交互的数据格式

1. 全部是双引号 除了 boolean number
2. 只接收 number  boolean  string null 基本数据类型
3. 末尾不能加标点
4. 格式表示法： [{}]  { count: []}
  

# 通过ajax 请求数据 需要的几个步骤：

# 请求路径   （找数据） 
# 请求方式   get(url)  post(请求体)  
# 传递参数   “字符串”
# 回调函数   （拿数据）

1. 打开服务 go live
2. 找数据：请求路径  
3. 拿数据：回调函数

# ajax('./test.json', function(res) {
#  console.log(res)
# })




# 本地存储

打开Application 

Dom  Bom  EC
var dom = document.query


# var stroage = window.localstroage;

#方法： 
# 存:   stroage.setItem(key, 值)
# 取：   stroage.getItem(key)
# 删除： stroage.removeIten(key)
# 清除： stroage.clear()

#特点：同源页面下 可以共享数据

只能存字符串
