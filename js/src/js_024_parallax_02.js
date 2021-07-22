// js_024_parallax_02.js

(function($){
// jQuery

// 변수
var win = $(window);
var part = $('.part2');
var li = part.find('li');

// 임시 체크
var liOffset = li.eq(0).offset().top;
var winH = win.outerHeight();
var liPImg = li.eq(0).find('.position_img');

// 함수


// 이벤트
win.on('scroll', function(e){
  var winScroll = win.scrollTop();
  var findScroll = winScroll - liOffset + winH; // 선택된형태가 브라우저 하단에서 0부터 값
  var percentScroll = parseInt(findScroll / winH * 100);
  if(percentScroll < 0) {
    per = 0;
  }else if(percentScroll > 100){
    per = 100;
  }else{
    per = percentScroll;
  }

  // liPImg.stop().animate({marginTop: -per/3 + 'px'}, 300);
  liPImg.css({transform:'translateY(' + -per/3 + 'px)',
                     transition:'all 300ms ease'});

});
})(jQuery);