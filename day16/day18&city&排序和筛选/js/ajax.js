//封装ajax
function ajax(opt){
    // 1 创建xmlhttprequest 对象
    var xml = new XMLHttpRequest();
    //2 建立请求
    xml.open(opt.type,opt.url); //type 请求方式  url请求路径
    // 3发送请求
    xml.send();
    //监听服务器响应变化
    //4.监听服务器响应，并获取数据
    xml.onreadystatechange=function(){
        //判断服务器相应状态 和发送请求状态
        if(xml.readyState===4 && xml.status === 200){
            opt.success && opt.success(JSON.parse(xml.responseText));
        }
    }
    //封装ajax四个步骤
    //1 创建XMLHttpRequest对象
    //2 建立请求
    //3 发送请求
    //4.监听服务器响应，并获取数据
}