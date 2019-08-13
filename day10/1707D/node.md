# 拖  放（高级）


源物体：
  dragstart = 
     设置数据
目标物体：
   dragover
      取消默认行为；
      e.preventDefault();
   drop  
     获取数据  进行其他操作

  源物体 
   dragend  
  目标
   dragenter
   dragleave

 # 上传：
  <input type="file" mutiple accept='.doc, .jpg, .png'>  
  mutiple:上传多个
  accept 上传接受的类型;
  e.target.files // 描述信息
                    name：文件名字： 
                    time：修改时间 
                    size: 文件大小 

  ## 上传预览效果：
     // 上传文件域：
    var fr = new FileReader()
    读文件: 
      base64码的文件
    写文件:
      img.src = this.result;




