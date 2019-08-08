; (function () {


  // var doms = {
  //   0: 'dom1',
  //   1: 'dom2',
  //   length: 2
  // }

  // for(var i = 0; i< dom.length; i++) {
  //   console.log(doms[i])
  // }

  var myJq = function (el) {
    return new myJq.fn.init(el)
  }

  myJq.fn = myJq.prototype = {
    init: function (el) {
      if (typeof el === 'string') {
        var dom = document.querySelectorAll(el)
        for (var i = 0; i < dom.length; i++) {
          this.push(dom[i])
        }
      }
    },
    push: [].push,
    swipe: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', mytouch)
        this[i].addEventListener('touchend', mytouch)
      }
      var startx, starty, endx, endy;
      function mytouch(e) {
        var touchs = e.changedTouches[0];
        switch (e.type) {
          case "touchstart":
            startx = touchs.pageX;
            starty = touchs.pageY;
            break;
          case "touchend":
            endx = touchs.pageX;
            endy = touchs.pageY;
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx >= 25) {
              console.log('left')
              fn.call(this, e, 'left')
            }
            if (Math.abs(endx - startx) > Math.abs(endy - starty) && startx - endx <= -25) {
              console.log('right')
              fn.call(this, e, 'right')
            }
            break;
        }
      }
    },
    tap: function (fn) {
      for (var i = 0; i < this.length; i++) {
        this[i].addEventListener('touchstart', mytouch)
        this[i].addEventListener('touchend', mytouch)
      }
      var startTime, endTime;
      function mytouch(e) {
        var touchs = e.changedTouches[0];
        switch (e.type) {
          case "touchstart":
            startTime = Date.now();
            break;
          case "touchend":
            endTime = Date.now();
            if (endTime - startTime <= 300) {
              fn.call(this, e)
            }
            break;
        }
      }
    }
  }


  myJq.fn.init.prototype = myJq.fn;
  window.$ = window.myJq = myJq;

})()