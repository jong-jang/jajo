// js_017_banner_03.js

(function($){
// jQuery
// 인디케이터 변수
var viewBox = $('#viewBox');
var indi = viewBox.children('.indi');
var indiUl = indi.children('ul');
var indiLi = indiUl.children('li');
var indiA = indiLi.children('a');
// 버튼 변수
var btnBox = viewBox.children('.btn_box');
var nextBtn = btnBox.children('.next_btn');
var prevBtn = btnBox.children('.prev_btn');
// 이미지 변수
var viewWrap = viewBox.children('.view_wrap');
var viewUl = viewWrap.children('ul');
var viewLi = viewUl.children('li');
var viewLiLen = viewLi.length;
// 자연스러운 애니메이션
var cloneLi = viewLi.eq(-1).clone();
viewUl.prepend(cloneLi);

var newviewLi = viewUl.children('li');
var newviewLiLen = newviewLi.length;
viewUl.css({width:100 * newviewLiLen + '%'});
newviewLi.css({width:100 / newviewLiLen + '%'});

// 인디케이터 함수
var indiFn = function(n){
  indiLi.eq(n).addClass('act');
  indiLi.eq(n).siblings().removeClass('act');
};

// 자동 애니메이션 실행 함수
var automoveFn;
var gomoveFn = function(){ // 즉시 실행을 막기 위한 클로저
  automoveFn = setInterval(function(){
    n++;
    if(n > viewLiLen-1){
      n=0;
      viewUl.css({marginLeft:100 + '%'});
    }
    viewUl.animate({marginLeft:-100*n + '%'});
    indiFn(n);
  }, 2000);
};
// 자동 애니메이션 정지 함수
var stopmoveFn = function(){
  clearInterval(automoveFn);
};

// gomoveFn();

// 실행 변수
var n=0; // 클릭 수
var permission=1;
// setinterval 이벤트
viewBox.on('mouseenter', function(){
  stopmoveFn();
});
viewBox.on('mouseleave', function(){
  gomoveFn();
});

// 다음 버튼 이벤트
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission=0;
    n++;
    if(n> viewLiLen-1){
      n=0;
      viewUl.css({marginLeft:100 + '%'});
      viewUl.animate({marginLeft:-100*n + '%'});
    }
    viewUl.animate({marginLeft:-100*n + '%'}, function(){
      permission=1;
    });
    indiFn(n);
  } // permision
});
// 이전 버튼 이벤트
prevBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission=0;
    n--;
    viewUl.animate({marginLeft:-100*n + '%'}, function(){
      if(n<0){
        n=viewLiLen-1;
        viewUl.css({marginLeft:-100*n + '%'});
      }
      permission=1;
    });
    indiFn(n);
  } // permision
});

// 인디케이터 이벤트
indiA.on('click', function(e){
  e.preventDefault();
  var t = $(this).parent().index();
  viewUl.animate({marginLeft:-100*t + '%'});
  indiFn(t);
  n=t;
});

})(jQuery);