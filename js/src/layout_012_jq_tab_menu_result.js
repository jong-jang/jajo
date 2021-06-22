// js/src/layout_012_jq_tab_menu_result.js

// 탭메뉴
// li 클릭 - 해당하는 순서에 맞는 .content 요소가 나타나기

// li 클릭시 기존에 보이는 .content는 사라지고,
// 내가 클릭한 순서에 맞는 .content 요소가 나타나게 만들기

// li 클릭이 아니라, 내부의 버튼을 클릭 버튼의 부모인 li 몇번째인가?
// click(선택된상태)/focus/hover 각각의 상황에 맞게 표현처리방법?
// 선택으로인해 내용이 나타나면, 먼저 읽어주어야 하는 표현은 무엇인가?

// ---------------------------------------------------------------------
(function($){

  // 변수 선택자
  var tabList = $('.tab_list');
  var tabUl = tabList.children('ul');
  var tabLi = tabUl.children('li');
  var tabBtn = tabLi.children('button');
  var tabContent = $('.content');

  // level 01
/*
  tabLi.on('click', function(){
    var thisI = $(this).index();

    var contentEq = tabContent.eq(thisI);

    contentEq.show();
    contentEq.siblings().hide();
  });
*/

//js selector.setAttribute('속성명', '값');
//jQuery selector.attr('속성명') -> 해당속성의 값을 파악
//jQuery selector.attr('속성명','값') -> 해당속성의 값처리

// tabContent.attr('tabindex', -1);
var select;
tabLi.eq(0).addClass('act');
tabContent.attr('tabindex',-1);

  tabBtn.on('focus', function(e){
    e.preventDefault();
    var _this = $(this);
    var _thisParent = _this.parent('li');
    var _i = _thisParent.index();

    var _contentEq = tabContent.eq(_i);
    select = _contentEq;
    // jQuery는 애니메이션기능이 들어있는 메소드는 콜백기능이 있다.
    tabContent.attr('tabindex',0);
    _contentEq.show();
    // function(){ $(this).focus();}
    _contentEq.siblings().hide();

  }); // tabBtn.on('focus')


  // 선택자.addEventListener('keyup', function(event){});
  tabBtn.on('keyup', function(e){
    // console.log(e.key.toLowerCase());
    var eKey = e.key;
    var eKeyLower = eKey.toLowerCase();
    var enterKey = eKeyLower === 'enter';
    if(eKeyLower === 'enter'){
      select.focus();
    }

  });



})(jQuery);