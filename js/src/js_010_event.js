// ../js/src/js_011_event.js

var evtUl = document.getElementsByClassName('event_list')[0];
var evtLi = evtUl.getElementsByTagName('li');
// 선택자.addEventListener('이벤트종류', 수행할 기능)

// li: 첫번째에 클릭시 배경색상을 변경
evtLi[0].addEventListener('click', function(){
  evtLi[0].style.backgroundColor = '#5a3';
  
  var hasClassCk = evtUl.getElementsByClassName('act').length;
  if(hasClassCk > 0){
    evtLi[0].classList.remove('act');
  }else{
  evtLi[0].classList.add('act');
  }
});
evtLi[1].addEventListener('mouseenter',function(){
  evtLi[1].style.backgroundColor = '#a47';
});
evtLi[1].addEventListener('mouseleave', function(){
  // evtLi[1].style.backgroundColor = 'transparent';
  evtLi[1].removeAttribute('style');
});

// focus/blur는 a,button,input,textarea,select...form
// focus가 처리되었을때, 글씨를 굵게
// 이벤트가 js에서 수행되기전에 선행되는 이벤트들(a, button, ...)은
// 필요시 동작하지 못하도록 막아야한다. : preventDefault()
var liAnker = evtLi[2].getElementsByTagName('a')[0];

liAnker.addEventListener('click', function(event){
  event.preventDefault();
});

liAnker.addEventListener('focus', function(event){
  event.preventDefault();
  liAnker.style.fontWeight = 700 ;
  liAnker.style.color = '#fff' ;
});
liAnker.addEventListener('blur', function(event){
  event.preventDefault();
  liAnker.style.fontWeight = 'inherit' ;
  liAnker.style.color = 'inherit' ;
});

// 마우스가 움직일때 : mousemove
var mv = document.getElementsByClassName('mv')[0];

evtLi[3].addEventListener('mousemove', function(event){
  // console.log(event);
  mv.style.top = (-event.offsetY / 2) + 'px';
  mv.style.left = (-event.offsetX / 2) + 'px';
});

// 포커스되는 형태를 파악
// 키보드처리시 발생되는 무언가도 체크
// var inputBox = eveLi[4].getElementById('inputBox');
var inputBox = document.getElementById('inputBox');

inputBox.addEventListener('focus', function(){
  console.log('키보드 입력');
});

inputBox.addEventListener('keyup', function(e){
  // console.log('key 눌렀음!!')
  var val = inputBox.value;
    var valLen = val.length;
    var i=0;
    var isNumber;
    for( ; i < valLen ; i++ ){
      isNumber = isNaN( parseInt(val[i]) );
      if(isNumber){
        console.error('숫자만 적으세요');
        break;
      }else{
        console.log('잘적네요');
      }
    }
});
