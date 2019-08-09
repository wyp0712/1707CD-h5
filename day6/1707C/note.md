# 回调函数用来解决异步方案

1. dom监听

2. 定时器

3. ajax请求数据



# 本地存储：将数据存在浏览器中；
 {
   key: value
 }

 # var storage = window.localStorage;
 # 方法： 
 # 存  storage.setItem(key, value)
 # 取  storage.getItem(key)
 # 删除 storage.removeItem(key)
 # 清除 storage.clear()

# 只能存字符串

如果是存对象的话，要将对象转成字符串
 JSON.stringify({})
如果存进去的是一个字符串的对象 取出的来的话还要转成对象
 JSON.parse() 

#特点： 本地存储只要你不删除，他在一直在；


# 同源页面可以共享数据  

# 同源页面：  同协议  同域名  同端口 





# ajax