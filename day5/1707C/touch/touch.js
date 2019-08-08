; (function () {


  // var obj = {
  //   0: 'dom1',
  //   1: "dom2",
  //   length: 2
  // }

  // new 就是把一个函数变成构造函数 变成了一个封闭的作用域

  var MyjQ = function (el) {
    return new MyjQ.fn.init(el)
  }

  MyjQ.fn = MyjQ.prototype = {
    init: function (el) {
      if (typeof el === 'string') {
        var dom = document.querySelectorAll(el);
        for (var i = 0; i < dom.length; i++) {
          // 把dom元素的每一个放在一个可遍历的对象中；
          this.push(dom[i])
        }
      }
    },
    push: [].push,
    tap: function () {

    },
    swipeLeft: function (fn) {
      // 所有的元素目前都存在this 中；
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', myTouch)
        this[i].addEventListener('touchmove', myTouch)
        this[i].addEventListener('touchend', myTouch)
      }

      var startx, starty, endx, endy;
      function myTouch(e) {
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
              // 左滑
              fn.call(this, e)
            }
            break;
        }

      }
    }
  }

  MyjQ.fn.init.prototype = MyjQ.fn // 打通作用域名
  window.$ = window.MyjQ = MyjQ;

})()