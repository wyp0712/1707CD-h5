# 拖放：

拖  放

源物体: dragstart          dragend
        设置数据
      
目标物体: dragover  drop     dragenter   dragleave
    
    dragover
      e.preventDefault();
    drop
       获取数据 或者进行其他操作；

e.dataTransfer.dropEffect = "copy"; // move  link

# 上传

 <input type="file" class="file" mutiple  accept=".doc, .png, .jpg">

mutiple: 上传多个
accept： 上传类型

e.target.files  // 描述信息
                     name: 文件名字
                     size: 文件大小
                     time: 文件修改时间

# 上传预览的话，必须配合上传文件域；

1. 实例化
var fr = new FileReader()

2. 读取数据
fr.readAsDataUrl('描述信息')

3. 监听：

fr.onload      加载
fr.onloadstart 监听开始开始
fr.onerror     错误
fr.onabort     中止
fr.onprogress  进度
fr.onloadend   加载结束



