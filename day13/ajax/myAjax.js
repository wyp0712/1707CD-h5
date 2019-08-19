/**
 * 
 * ajax
 *  
 * 
 * XMLHTTPRequest()
 **/


function ajax(opt) {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
  xhr.open(opt.type, opt.url + '?' + formate(opt.data), true);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var data = xhr.response;
        opt.success && opt.success(JSON.parse(data))
      }
    }
  }
}

// var obj = { page:1, size:5 }
// { page:1, size:5 }  ==>  page=1&size=5
function formate(obj) {
  var str = ''
  for(var key in obj) {
    str += key + '=' + obj[key] + '&'
  }
  return str.replace(/\&$/, '')
}


// var list = formate(obj)
// console.log(list)
