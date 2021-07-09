// jq_006_mouseck_xy.js

(function($){
// jQuery
var area = $('.area');
var chType = $('.check_type');
var chX = $('.check_x');
var chY = $('.check_y');

// click은 마우스눌럿다 띄는 행위전체, 왼버튼으로 인식되어 있으며 button값은 0

// mousedown - 마우스를 누른 키를 찾아내기
// 이벤트.button , 이벤트.buttons
// 0 -> 왼버튼, 1 -> 휠, 2 -> 오른버튼

// mouseup 마우스 누른버튼 뛸때
// mousemove 마우스가 움직임을 가질때, 마우스 누른상태로 움직임을 체크하려면 여러 옵션을 설정해서 사용해야한다.

// touchstart 터치가능한 기기를 누를때
// touchend 터치가능한 기기를 띌때
// touchmove 터치중 손가락을 움직일때

// 체크 및 좌표함수 -> 생성자 함수를 통해 필요시 값을 각각 파악할 수 있도록 체크
var OffsetFn = function(){
  this.top = Math.round(area.offset().top);
  this.left = Math.round(area.offset().left);
  // console.log('top: '+ offsetTop + 'px', ' | ', 'left: '+ offsetLeft + 'px');
};

var checkTypeFn = function(e){
  var eType = e.type;
  var evt = e.originalEvent;

  chType.text(eType);

  var ofCk = new OffsetFn(); // { top: 00, left:00}
  var x,y,evtTouches,pointX,pointY;

  if(e.type === 'touchmove'){
    evtTouches = evt.changedTouches[0];
    pointX = evtTouches.pageX;
    pointY = evtTouches.pageY;
    x = pointX - ofCk.left; // 전체 포인터 x위치값에서 선택영역의 pageX만큼을 뺀 값
    y = pointY - ofCk.top; // 전체 포인터 y위치값에서 선택영역의 pageY만큼을 뺀 값
  }else if(e.type === 'mousemove'){
    x = evt.offsetX;
    y = evt.offsetY;
  }
  chX.text(x);
  chY.text(y);
};

// client : 브라우저에서 보이는부분만큼을 왼쪽을 0, 상단을0로 무조건본다.
// offset : 이벤트 발생영역 -> 터치기반에는 offsetX, offsetY 존재하지 않는다.
// page :  문서 전체의 크기를 기준으로 본다.
// screen : 모니터 좌표기준

// offset().top, offset().left -> document 상단끝, document 왼쪽끝 에서부터 떨어진 양

// -----------------------------------------------------------------------

// mousemove
var option = false;
area.on('mousedown', function(e){
  if(e.button === 0){
    option = true;
    console.log('마우스 왼버튼 클릭으로 move기능 승인');
  }else{
    console.log('마우스 왼버튼만 승인가능합니다.');
  }
});
area.on('mouseup', function(e){
  option=false;
  // console.log('마우스 move기능 해제');
  chType.text('none');
  // setTimeout(function(){
    // console.clear();
  // }, 100);
});


area.on('mousemove', function(e){
  if(option){
    checkTypeFn(e);
    // console.log('마우스 움직이는 중');
  };
});

area.on('touchstart', function(e){
  checkTypeFn(e);
  // console.log('이곳이 터치의 시작점!!!');
});

area.on('touchend', function(e){
  checkTypeFn(e);
  // console.log('이곳이 터치의 끝점!!!');
  // setTimeout(function(){
    // console.clear();
  // }, 3000);
});

area.on('touchmove', function(e){
  checkTypeFn(e);
  // console.log('터치로 움직이는 중');
});

})(jQuery);