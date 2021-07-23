// js_025_landing_02.js

(function($){
// jQuery
  // 변수 ------------------------------------------------
  var win = $(window);
  var part = $('.part');
  var li = part.find('li');
  
  // 기능수행체크 
  var winH = win.outerHeight();
  
  var setLiFn = function(scroll){
    // li.각각 수행 
    var liSelect; // = li.eq(0);
    var liOffset; // = liSelect.offset().top;
    var setOffset; // = liOffset - (winH / 3 * 2);  // liOffset + winH - (winH/3);
    var resultN;
  
    var i=0; 
    var liLen = li.length;
    for(; i<liLen; i += 1){
      liSelect = li.eq(i);
      liOffset = liSelect.offset().top;
      setOffset = liOffset - (winH / 3 * 2);
  
      resultN = scroll - setOffset;
      (resultN >= 0) ? liSelect.addClass('act') : liSelect.removeClass('act');    
    }
  }
  console.log('나는 멍청하다 ㅎ');
  // 이벤트 ===============================================
  // win.on('DOMmouseWheel', function(){
    // var winScroll = win.scrollTop();
    // setLiFn(winScroll);
  // });
  win.on('mousewheel', function(){
    var winScroll = win.scrollTop();
    setLiFn(winScroll);
  });
})(jQuery);