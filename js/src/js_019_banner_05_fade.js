// js_019_banner_05_fade.js

(function($){
// jQuery

var banner = $('.banner_01');

var indicatorArea = banner.find('.indicator');

var indiLi = indicatorArea.find('li');
var indiLiLink = indiLi.children('a');

var playArea = banner.find('.play')
var playBtn = playArea.children('button');

var btnSelect = banner.find('.button_select');
var nextBtn = $('.next');
var prevBtn = $('.prev');

var viewCount = banner.find('p');
var totalNum = viewCount.find('.total');
var nowNum = viewCount.find('.now');

var viewArea = $('.view_area');
var li = viewArea.find('li');
var liLen = li.length;
var newCount = 0;
var beforeCount = newCount;

// 인디케이터(ul) 생성--------------------------------
indicatorArea.prepend('<ul class="indi_ul"></ul>');
var indiUl = indicatorArea.find('.indi_ul');
var i = 0;
var setNum = function(i){
  var num = '00' + (i+1);
  var setN = num.slice(-2);
  return setN;
};

for (; i<liLen ; i+=1){
  indiUl.append('<li><a href="#">'+ setNum(i) + '</a></li>');
}
var indiLi = indicatorArea.find('li');
indiLi.eq(0).addClass('act');
// 함수
var slideFadeFn = function(n){
  li.eq(newCount).show();
  li.eq(beforeCount).fadeOut(function(){
    li.eq(beforeCount).removeClass('act');
    li.eq(newCount).addClass('act');
    beforeCount = newCount;
  });
};

var countFn = function(newCount){
  nowNum.text(newCount+1);
  totalNum.text(liLen);
};
var indiActionFn = function(newCount){
  indiLi.eq(newCount).addClass('act');
  indiLi.eq(newCount).siblings().removeClass('act');
}
var slideAct = function(newCount){
  slideFadeFn(newCount);
  countFn(newCount);
  indiActionFn(newCount);
};

nextBtn.on('click', function(e){
  e.preventDefault();
  newCount +=1;
  if(newCount >= liLen){ newCount = 0;}
  slideAct(newCount);
}); // nextBtn.on('click')

prevBtn.on('click', function(e){
  e.preventDefault();
  newCount -=1;
  if(newCount<0){newCount=liLen-1;}
  slideAct(newCount);
}); // prevBtn.on('click')

// 인디케이터 클릭

indiLiLink.on('click', function(e){
  e.preventDefault();
  newCount = $(this).parent().index();
  slideAct(newCount);
});

var timed = 1000;
// 트리거 수행
var slideGoFn = function(){
  slideClick = setInterval(function(){
    nextBtn.trigger('click');
  }, timed*4);
};

var slidePauseFn = function(){
  clearInterval(slideClick);
}

slideGoFn();

// 재생/일시정지버튼 수행
var nowT = playBtn.text();
var pauseT = '정지';
var playState = [nowT, pauseT];
playBtn.addClass('act');

playBtn.on('click', function(e){
  e.preventDefault();
  // hasClass('이름') -> 클래스명이 있으면 true, 없으면 false
  var isAct = $(this).hasClass('act');
  
  if(isAct){
    // act가 잇으면 -> 재생중이니 정지
    slidePauseFn();
    playBtn.removeClass('act');
    playBtn.text(playState[1]);
  }else{
    // act가 없으면 -> 멈춰있으니 재생
    slideGoFn();
    playBtn.addClass('act');
    playBtn.text(playState[0]);
  }
  
});

// 마우스 올릴경우 수행
  banner.on('mouseenter', function(){
    slidePauseFn();
  });
  banner.on('mouseleave', function(){
    slideGoFn();
  });

// -----------------------------------------
  // 1. 다음 버튼을 누르면 뒤에나올 요소를 나오게 해라
  // 2. 현재 보이는 요소를 fadeOut() 사라지게하고, 뒤에요소는 미리 배치
  // 3. 마지막에 위치했을 경우 -> 처음 요소가 나타나게 만들어라
  // 2-1. 앞에 있던(보이던) 요소는 사라지면서(display:none) - z-index가 뒤로
  // 2-2. 뒤에 나올 요소는 앞에 요소가 사라지고 이후에 상황을 고려하여 z-inex를 앞으로
  // 4.전체 갯수와 현재 보이는 요소의 순서 표기
  // 5. 인디케이터를 클릭시 해당 위치에 맞는 요소가 나타나게, 인디케이터 기능 수행
  // 6. 인디케이터기능 시각효과 처리
  // 7. 중복수행중인 기능을 함수처리
  // 8. 인디케이터를 광고의 갯수에 따라 생성되게 만들기
  // 9. 자동으로 화면이 이동되게 만들기
  // 10. 일시정지, 재생버튼을 클릭하여 동작처리

})(jQuery);