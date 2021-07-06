// js_017_banner_03_indicator.js

(function($){
// jQuery

// 1. 인디케이트 클릭시 해당하는 광고내용이 움직이게
// 101. 인디케이터를 어느것을 클릭햇는지
// 102. 클릭한 인디케이터의 위치에따른 광고의 위치
// 103. 선택한 순서에 맞는 인디케이터에 act를 담기
// -----------------------------------------------


// 변수
var banner = $('.banner_01');
var indicator = banner.find('.indicator');
var indiUl = indicator.find('ul');
var indiLi = indiUl.find('li');
var indiLink = indiLi.find('a');

var viewArea = banner.find('.view_area');
var viewUl = viewArea.find('ul');

var n = 0;
// 이벤트
indiLink.on('click', function(e){
  e.preventDefault();
  // 주체의 순번
  var _thisI = $(this).parent().index();
  n = _thisI;
  
  // 광고이동
  viewUl.stop().css({marginLeft : (-100*n) + '%'});

  // .act
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
});

})(jQuery);