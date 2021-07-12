// js_021-2_scroll_move.js

(function($){
// jQuery
// 1. .top_move버튼 클릭시 상단으로 이동
// 2. 기존의 임시링크는 x
// 3. #navBox내부의 a요소를 클릭시 해당 내용의 우치로 스크롤
// 4. #headBox의 높이값 만큼 덜 움직이게

// 변수
// var win = $(window);
var doc = $('html,body');
var headBox = $('#headBox');
var navi = $('#navBox');
var navLink = navi.find('a');

var topMove = $('.top_move');

// headBox높이값 파악
var headH = headBox.outerHeight();

// target함수
var targetFn = function(it){
  var linktarget = it.attr('href');
  var target = $(linktarget);
  var targetOffset = target.offset().top;
  var wrapOffset = $('#wrap').offset().top;
  targetOffset === wrapOffset ? moveScroll = wrapOffset : moveScroll = targetOffset - headH;
  // if(targetOffset === 0){
    // moveScroll = targetOffset;
  // }else{
    // moveScroll = targetoffset - headH;
  // }
  doc.animate({scrollTop:moveScroll + 'px'});
};
// 이벤트
topMove.find('a').on('click', function(e){
  e.preventDefault();
  var _this = $(this);
  targetFn(_this);
});

navLink.on('click', function(e){
  e.preventDefault();
  var _this = $(this);
  targetFn(_this);
});

})(jQuery);