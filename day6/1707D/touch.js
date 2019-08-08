; (function () {

  var myjQ = function (el) {
    return new myjQ.fn.init(el);
  }
  
  myjQ.fn = myjQ.prototype = {
    /**
     * @function [通过init函数来获取dom节点,并且将左右的dom节点放在this这个对象中,方便访问] 
     * */
    init: function (el) {
      if (typeof el === 'string') {
        var dom = document.querySelectorAll(el);
        for (var i = 0; i < dom.length; i++) {
          // 把每一个元素放在this 这个对象中。就是方便使用，因为this在构造函数中的任何地方都能访问到；
          this.push(dom[i])
        }
      }
    },
    /**
     * @function [重写push方法，具有数组push的功能]
     * */
    push: [].push,
    /**
     * @function [左滑右滑事件]
     * 
     * @param {通过判读手指按下的位置，和角度的大小 来的得到左滑和右滑的判断}
     * @param {回调函数说明：回调函数负责把左滑和右滑 的结果传递出去，（函数在执行的过程中，会把实际参数传递给形式参数）}
     */
    swipe: function (fn) {

      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', myTouch)
        this[i].addEventListener('touchend', myTouch)
      }
      // e.touches[0]  e.changedTouch[0]

      var startx, starty, endx, endy;
      function myTouch(e) {
        var changedTouch = e.changedTouches[0]
        switch (e.type) {
          case "touchstart":
            startx = changedTouch.pageX;
            starty = changedTouch.pageY;
            break
          case "touchend":
            endx = changedTouch.pageX;
            endy = changedTouch.pageY;

            // 判断是左
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx >= 25) {
              fn.call(this, e, 'left')
            }
            // 还是右
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx <= -25) {
              fn.call(this, e, 'right')
            }
            break
        }
      }


    },
    /**
     * @function [单击事件]
     * @fun { 解决移动端300ms 延迟问题 }
     */
    tap: function () {

    }
  }

  // 打通作用域 将构造函数 myjQ 的作用域和 init 的作用域打通；
  myjQ.fn.init.prototype = myjQ.fn;
  window.$ = window.myjQ = myjQ;
})()