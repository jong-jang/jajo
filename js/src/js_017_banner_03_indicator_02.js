// js_017_banner_03_indicator_02.js

(function($){
  // jQuery
  
  // 1. 인디케이트 클릭시 해당하는 광고내용이 움직이게
  // 101. 인디케이터를 어느것을 클릭햇는지
  // 102. 클릭한 인디케이터의 위치에따른 광고의 위치
  // 103. 선택한 순서에 맞는 인디케이터에 act를 담기
  // ------------------------------------------------------
  // 104. 일정시간마다 광고배너영역이 움직이도록 처리 -> setInterval
  // 105. 마우스 올리면 정지 -> clearInterval
  // 106. 일정시간마다 움직이다 마우스올리면 정지, 벗어나면 다시 동작
  // 
  var banner = $('.banner_02');
  var indicator = banner.find('.indicator');
  var indiUl = indicator.find('ul');
  var indiLi = indiUl.find('li');
  var indiLink = indiLi.find('a');
  
  var viewArea = banner.find('.view_area');
  var viewUl = viewArea.find('ul');
  var viewLi = viewUl.find('li');
  
  var n = 0;
  var timed = 500;
  var indiLiLen = indiLi.length;

  // 마지막요소를 앞에 붙여넣기
  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.find('li');
  var newLen = newViewLi.length;

  viewUl.css({width:100*newLen + '%', left:-100 + '%', position:'relative'});
  newViewLi.css({width:(100/newLen)+ '%'});
  
  // 함수 생성
  var slidemoveFn = function(n, interval){
    // setInterval기능과 마지막 위치에서 처음으로 이동시
    if(n <= 0 && interval){
      viewUl.css({marginLeft:100+'%'});
    }
    // 광고이동
    viewUl.stop().animate({marginLeft : (-100*n) + '%'}, timed);
  
    // .act
    indiLi.eq(n).addClass('act');
    indiLi.eq(n).siblings().removeClass('act');
  };
  
  
  // 이벤트
  indiLink.on('click', function(e){
    e.preventDefault();
    n = $(this).parent().index();
    slidemoveFn(n, false);
  });

  // 반복기능 -> clearInterval에서 제어하기위해 변수로 지정
  // 변수로 지정하더라도, 함수자체는 동작을 한다.
  var slideGoFn = function(){
    autoMoveFn = setInterval(function(){
      // n의 수치가 일정범위 내에서 처리되는것을 파악
      n += 1;
      if(n >= indiLiLen){n=0;}
      slidemoveFn(n, true);
    }, timed*4);
    return autoMoveFn;
  }

  // viewArea.on('mouseenter', function(){
    // clearInterval(autoMoveFn);
  // });
  // viewArea.on('mouseleave', function(){
    // slideGoFn();
  // });
  
  var slideStopFn = function(){
    clearInterval(autoMoveFn);
  };
  slideGoFn();

  banner.on({'mouseenter':slideStopFn, 'mouseleave' : slideGoFn});
  // clearInterval(autoMoveFn);
  
  // setInterval(기능수행, 시간); -> 일정 시간 마다 기능을 수행
  // setTimeout(기능수행, 시간); -> 일정 시간 후에 기능을 수행
  // clearInterval(setInterval 이름);
  
  })(jQuery);