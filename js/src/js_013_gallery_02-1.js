// js_013_gallery_02-1.js

(function($){
// jQuery
var modalData = [
  {
    miniImg:'gal_01.jpg',
    miniText:'설명 01',
    bigImg:'gal_01.jpg',
    bigText:'빅설명 01'
  },
  {
    miniImg:'gal_02.jpg',
    miniText:'설명 02',
    bigImg:'gal_02.jpg',
    bigText:'빅설명 02'
  },
  {
    miniImg:'gal_03.jpg',
    miniText:'설명 03',
    bigImg:'gal_03.jpg',
    bigText:'빅설명 03'
  },
  {
    miniImg:'gal_04.jpg',
    miniText:'설명 04',
    bigImg:'gal_04.jpg',
    bigText:'빅설명 04'
  },
  {
    miniImg:'gal_05.jpg',
    miniText:'설명 05',
    bigImg:'gal_05.jpg',
    bigText:'빅설명 05'
  },
  {
    miniImg:'gal_01.jpg',
    miniText:'설명 01',
    bigImg:'gal_01.jpg',
    bigText:'빅설명 01'
  },
  {
    miniImg:'gal_02.jpg',
    miniText:'설명 02',
    bigImg:'gal_02.jpg',
    bigText:'빅설명 02'
  },
  {
    miniImg:'gal_03.jpg',
    miniText:'설명 03',
    bigImg:'gal_03.jpg',
    bigText:'빅설명 03'
  },
  {
    miniImg:'gal_04.jpg',
    miniText:'설명 04',
    bigImg:'gal_04.jpg',
    bigText:'빅설명 04'
  },
  {
    miniImg:'gal_05.jpg',
    miniText:'설명 05',
    bigImg:'gal_05.jpg',
    bigText:'빅설명 05'
  },
  {
    miniImg:'gal_01.jpg',
    miniText:'설명 01',
    bigImg:'gal_01.jpg',
    bigText:'빅설명 01'
  },
  {
    miniImg:'gal_02.jpg',
    miniText:'설명 02',
    bigImg:'gal_02.jpg',
    bigText:'빅설명 02'
  },
  {
    miniImg:'gal_03.jpg',
    miniText:'설명 03',
    bigImg:'gal_03.jpg',
    bigText:'빅설명 03'
  },
  {
    miniImg:'gal_04.jpg',
    miniText:'설명 04',
    bigImg:'gal_04.jpg',
    bigText:'빅설명 04'
  },
  {
    miniImg:'gal_05.jpg',
    miniText:'설명 05',
    bigImg:'gal_05.jpg',
    bigText:'빅설명 05'
  },
  {
    miniImg:'gal_01.jpg',
    miniText:'설명 01',
    bigImg:'gal_01.jpg',
    bigText:'빅설명 01'
  },
  {
    miniImg:'gal_02.jpg',
    miniText:'설명 02',
    bigImg:'gal_02.jpg',
    bigText:'빅설명 02'
  },
  {
    miniImg:'gal_03.jpg',
    miniText:'설명 03',
    bigImg:'gal_03.jpg',
    bigText:'빅설명 03'
  },
  {
    miniImg:'gal_04.jpg',
    miniText:'설명 04',
    bigImg:'gal_04.jpg',
    bigText:'빅설명 04'
  },
  {
    miniImg:'gal_05.jpg',
    miniText:'설명 05',
    bigImg:'gal_05.jpg',
    bigText:'빅설명 05'
  }
];
// 1. 클릭해야하는 이미지 삽입
// 1-1. 각각의 이미지는?, 삽입할 이미지는?, 추가 내용은? - 객체로...
// 2. 클릭시 modal_view 나타나게
// 3. .modal_view 내부의 .modal_content에 이미지 나타나게
// 4. .modal_view 내부의 닫기버튼 클릭시 .modal_view사라지게
// 4-1. .modal_view 뒤에있는 .back_board를 클릭시 .modal_view사라지게
// 5. 리스트 클릭시 닫기버튼에 자동 포커스처리 및 닫기 클릭시 이전요소의 순번에 포커스
// ------------------------------------------------------------------------------
// 6. li요소 생성
// 7. 다음/이전버튼 html로 생성
// 8. 클릭시 이동
// 8-1 다음버튼 클릭시 이동
// ------------------------------------------------------------------------------


var bigUrl = '../img/gallery/u_big/';
var miniUrl = '../img/gallery/u_thumnail/';

var modal = $('.modal');
var modalListArea = modal.children('.modal_list');
var modalListUl = modalListArea.children('ul');

var modalView = modal.find('.modal_view');
var modalContent = modal.find('.modal_content');
var closeBtn = modalView.find('.close_btn');
var backBoard = modalView.find('.back_board');
var modalLink, imgData;
var n=0;
var i=0;
var idx = 0;
var timed = 500;

var modalDataLen = modalData.length;
// -------------------------------------------
// li 생성기능
var makeLi = '<li><a href="#"></a></li>';

for(; n<modalDataLen; n+=1){
  modalListArea.children('ul').append(makeLi);
}
// ------------------------------------------
var modalLi = modalListArea.find('li');


// li 첫번째의 가로값(마진 포함) 파악
// width() -> 가로값을 파악
// innerWidth() -> padding값 포함 가로값 파악
// outerWidth() -> border값 포함 가로값 파악
// outerWidth(true) -> margin값 포함 가로값 파악

var getLiWidth = modalLi.eq(0).outerWidth(true);
// var getLiWidth = modalLi.eq(0).css('width');
var setModalUlWidth = (getLiWidth*modalDataLen) + 'px';
modalListUl.css({width:setModalUlWidth});
modalListArea.css({overflow:'hidden'});

// 8-1
var slideBtn = $('.list_slide_btn');
var next_btn = slideBtn.children('.next_btn');
var prev_btn = slideBtn.children('.prev_btn');
var mv=0;
next_btn.on('click', function(e){
  e.preventDefault();
  (mv <= -(modalDataLen-7))? mv = -modalDataLen + 7 : mv--;
  modalListUl.stop().animate({marginLeft: (getLiWidth * mv) + 'px'});
});

// --------------------------------------------
var miniImgInsertFn = function(i){
  var modalLink, imgData;
  modalLink = modalLi.eq(i).children('a');
  imgData = miniUrl + modalData[i].miniImg;
  modalLink.css({backgroundImage:'url('+ imgData +')'});
  modalLink.text(modalData[i].miniText);
}

for(; i<modalDataLen; i++){
  miniImgInsertFn(i);
}
// ------------------------------------------------


modalLi.children('a').on('click', function(e){
  e.preventDefault();
  // 선택한 요소의 부모요소의 순번
 var _thisI = $(this).parent().index();
 idx = _thisI;
 var bigImgArea = bigUrl + modalData[idx].bigImg;
 modalContent.css({backgroundImage:'url('+ bigImgArea +')'})
 modalView.stop().fadeIn(100, function(){
  closeBtn.children('button').focus();
 });
});

var modalViewHideFn = function(){
  return function(e){
    e.preventDefault();
    modalView.stop().fadeOut(timed, function(){
      modalLi.eq(idx).children('a').focus();
    });
  }
}

closeBtn.on('click', modalViewHideFn());
backBoard.on('click', modalViewHideFn());

// forEach와 유사하지만 jQuery each
// [배열].forEach(function(배열의 값, 순서){기능수행})
// $.each([배열], function(순서,배열의각값){기능수행})

// $.each([closeBtn, backBoard], function(i, data){
//   data.on('click', modalViewHideFn());
// });

})(jQuery);
