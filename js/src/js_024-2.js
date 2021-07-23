// js_024-2.js

(function($){
// jQuery
var win = $(window);
var winH = win.outerHeight();
var partLi = $('.part').find('li');


var moveFn = function(objTop){
  var moveSc = win.scrollTop()
  var move = moveSc - objTop + (winH);
  var moveL = parseInt(move / winH * 100);
  if(moveL <= 0){
    moveL = 0;
  }else if(moveL >= 100){
    moveL = 100;
  }
  console.log(moveL);
  return moveL;
}

var comFn = function(){
  var i = 0;
  var lieq, liImg, objTop, sc, sco;
  var liLen = partLi.length;
  for(; i < liLen; i++){
    lieq = partLi.eq(i);
    liImg = lieq.find('.img_box');
    objTop = liImg.offset().top;
    sc = 100 - moveFn(objTop);
    sco = (100-sc)/50 ;
    liImg.css({opacity:sco, backgroundPositionY : sc + '%', transition : 'all 800ms ease'});
  }
}

win.on('scroll', function(){
  comFn();
});

})(jQuery);