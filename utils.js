var utils = (function () {

  const utils = {
    /** 
     *  @function [将'id=1&name=321&age=32'字符串转成json对象]
     *  @param {strs}  
     * */
    formatStr: function (strs) {
      return JSON.parse('{"' + strs.replace('?', '').replace(/\&/g, '","').replace(/\=/g, '":"') + '" }')
    }
  }
  return utils
})()



