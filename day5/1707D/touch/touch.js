; (function () {

  // var obj = {
  //   0: 'dom1',
  //   1: 'dom2',
  //   length: 2
  // }
  var myjQquery = function (el) {
    return new myjQquery.fn.init(el)
  }
  
  myjQquery.fn = myjQquery.prototype = {
    // 选取元素的方法
    init: function (el) {
      if (typeof el === 'string') {
        var dom = document.querySelectorAll(el);
        for (var i = 0; i < dom.length; i++) {
          this.push(dom[i])
          console.log(this, 'this')
        }
      }
    },
    push: [].push,
    swipeLeft: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', mytouch)
        this[i].addEventListener('touchmove', mytouch)
        this[i].addEventListener('touchend', mytouch)
      }
      var startx, starty, endx, endy;
      function mytouch(e) {
        // 判断事件类型
        switch (e.type) {
          case 'touchstart':
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
            break;
          case 'touchmove':
            endx = e.touches[0].pageX;
            endy = e.touches[0].pageY;
            break;
          case 'touchend':
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx >= 25) {
              console.log('左滑动', 'movex')
              fn.call(this, e)
            }
            break;
        }
      }
    }
  }


  myjQquery.fn.init.prototype = myjQquery.fn; // 打通作用域
  window.$ = window.myjQquery = myjQquery;

})()