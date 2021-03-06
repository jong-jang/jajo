// js_018_banner_04.js

(function($){
// jQuery

// 변수
var banner = $('.banner_01');

var indicator = banner.find('.indicator');
var indiLi = indicator.find('li');
var indiLiLink = indiLi.find('a');

var indiP = indicator.find('p');
var totalNumber = indiP.find('.total');
var nowNumber = indiP.find('.now')

var buttonSelect = banner.find('.button_select');
var nextBtn = buttonSelect.find('.next');
var prevBtn = buttonSelect.find('.prev');

var viewArea = banner.find('.view_area');
var viewUl = viewArea.find('ul');
var viewLi = viewUl.find('li');

var n = 0;
var permission = true;
var viewLiLen = viewLi.length;
// 함수
var numberCheckFn = function(){
  totalNumber.text(viewLiLen);
  nowNumber.text(n+1);
};
var indiLiClassSetFn = function(n){
    // .act적용
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
    numberCheckFn(n);
};
var clickFn = function(n){
  viewLi.eq(n).fadeIn(function(){
    permission=true;
  });
  viewLi.eq(n).siblings().hide();
}
// 동작전 형태변경

// 함수 우선 수행



// 100. 인디케이터 클릭시 배너 이동

// 이벤트
// 101. 인디케이터 클릭
indiLiLink.on('click', function(e){
  e.preventDefault();
  // 순서파악
  n = $(this).parent().index();
  // 배너이동
  clickFn(n);
  indiLiClassSetFn(n);
});

// 200. 다음버튼/ 이전버튼 클릭시 배너 이동
nextBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission=false;
    n+=1;
    if(n >= viewLiLen){
      n=0;
    }
    clickFn(n);
    indiLiClassSetFn(n);
  }
});

prevBtn.on('click', function(e){
  e.preventDefault();
  if(permission){
    permission=false;
    n -= 1;
    if(n<0){
      n = viewLiLen -1;
    }
    clickFn(n);
    indiLiClassSetFn(n);
  }
});

// 일정 타임 이동처리
var timed = 1000;
var moveSlide;

var slideGoFn = function(){
  moveSlide = setInterval (function(){
    nextBtn.trigger('click');
  }, timed*2);
}
slideGoFn();
// gostop_btn
var pauseBtn = $('.pause');
var playBtn = $('.play');

pauseBtn.on('click', function(e){
  e.preventDefault();
  clearInterval(moveSlide);
  $(this).addClass('act');
  $(this).siblings().removeClass('act');
});

playBtn.on('click', function(e){
  e.preventDefault();
  slideGoFn();
  $(this).addClass('act');
  $(this).siblings().removeClass('act');
});

banner.on('mouseenter', function(){
  clearInterval(moveSlide);
});
banner.on('mouseleave', function(){
  slideGoFn();
});

})(jQuery);