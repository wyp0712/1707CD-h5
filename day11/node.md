#1707C

## 复习：知识

拖放:
 1. 拖拽属性 draggable = true;  img  href a
 2. 源物体：   dragstart            dragend
 3. 目标物体： dragover    drop     dragenter  dragleave  

 4. dataTransfer.setData('text', '')  // MIME类型
    dataTransfer.getData()
    dataTransfer.files
    dataTransfer.items

    dataTransfer.dropEffect = 'move' copy link

## 上传文件进度条:


<input type="file" mutiple accept=".doc">

预览效果

var fr = new FileReader()
fr.readAsDataUrl(item) // 
// 监听：
fr.onload = function() {
  img.src = this.result;
}
fr.onprogress      ${ e.loaded / item.size * 100} %;



## 音乐播放器:

video.play()
video.pause()
video.muted = true
切歌之后 video.load()

// 拖动进度条播放音乐   (总的时长 video.duration) / (进度条的总的长度)  * movex;   
                 


# 新知识：
canvas:

















# 1707D


1. 拖放：
  拖放属性： draggable = true; img  href a

2. 源物体： dragstart  dragend

3. 目标物体：dragover   drop   dragenter  dragleave;

4. dataTransfer.setData('text', '');
  dataTransfer.getData("text")
  dataTransfer.files  拖文件上传的时候使用
  dataTransfer.items  
  
dataTransfer.dropEffect = 'move' link  copy;


  ## 上传文件

  <input type="file">

   mutiple
   accept= ".png, .jpg"

   图片预览

   var fr = new FileReader();
   // 读:
   fr.readAsDataUrl('')
   // 监听
   fr.onload
   fr.onprogress
       ${ e.loaded / item.size * 100 }%;
   fr.onabort  

   fr.error

   fr.loadstart

   fr.loadend


## video  mp4

play()
pause()
muted = true;
// 切歌；video.load()

video.oncanplay = function() {
  (总时长 video.duration)  / 进度条总长度  * movex（拖拽进度条移动距离;
}


# canvas:  数据可视化 态势 感知

  是什么：
   画布：

  干什么：
    
