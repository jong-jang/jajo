// js_027_parallax_03.js

(function($){

  // 변수
  var win = $(window);
  var coverImg_01 = $('.cover_image_01');
  var coverImg_02 = $('.cover_image_02');

  // 기능
  var img_02Top = parseInt(coverImg_02.css('top'));

  // 함수
  var scrollFn = function(){
    var winScroll = win.scrollTop() / 2;
    coverImg_01.css({backgroundPositionY:winScroll});
    coverImg_02.css({left:winScroll+'px',top: img_02Top - winScroll});
  }

  // 이벤트
  win.on('scroll', scrollFn);
  
})(jQuery);
