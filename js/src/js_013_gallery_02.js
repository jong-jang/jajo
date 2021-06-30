// js_013_gallery_02.js

(function($){
// jQuery

var galleryData = [
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

var makeLi = '<li><a href="#"><span>이미지_01</span></a></li>';
var gallery = $('.gallery');
var thumnail = gallery.find('.thumnail');
var big_image = gallery.find('.big_image');
var bigContent = big_image.children('.big_content');
var thumUrl = '../img/gallery/u_thumnail/'
var bigUrl = '../img/gallery/u_big/'

var thumnailLi, listSource, listText;

// 1. 반복문을 이용하여 big_image에 li를 생성
// 2. 이미지를 담는 객체를 생성하여 담기
// 3, 큰 영역에 첫번째 이미지를 담기

var i=0;

// big_image.css({backgroundImage:'url('+ bigUrl + galleryData[i].bigImg +')'})

var baseLiSetFn = function(i){
    // thumnail내부에 makeLi를 채우기 (append : 내부에 뒤에 채우기)
    thumnail.append(makeLi);
    thumnailLi = thumnail.children('li').eq(i);
    listSource = 'url(' + thumUrl + galleryData[i].miniImg + ')';
    listText = galleryData[i].miniText;
    thumnailLi.children('a').css({backgroundImage:listSource});
    thumnailLi.find('span').text(listText);
}

var thumLength = galleryData.length;
for(; i<thumLength; i+=1){
  baseLiSetFn(i);
};

// ----------------------------------------------------------------

var setGallerySystemFn =function(idx){
  var bigImgSet = bigUrl + galleryData[idx].bigImg;
  // console.log(bigImgSet);
  // bigContent.eq(0).css({backgroundImage:'url('+ bigImgSet + ')'}); // 임시
  bigContent = big_image.children('.big_content');
  var beforeEl = bigContent.eq(0);
  var afterEl = bigContent.eq(1);

  afterEl.css({backgroundImage:'url('+ bigImgSet + ')'});
  afterEl.show();
  
  setTimeout(function(){
    beforeEl.fadeOut(200,function(){
      beforeEl.removeClass('act');
      afterEl.addClass('act');
      big_image.append($(this));
    });
  },10);
  
  thumnailLi.eq(idx).siblings('li').removeClass('act');
  thumnailLi.eq(idx).addClass('act');
}

// ----------------------------------------------------------------

thumnailLi = thumnail.children('li');

setGallerySystemFn(4);
thumnailLi.on('mouseenter', function(e){

  // 선택된 요소의 순번파악
  e.preventDefault();
  var _thisI = $(this).index();
  setGallerySystemFn(_thisI);

});

thumnailLi.find('a').on('focus click', function(e){

  e.preventDefault();
  var _thisI = $(this).parent().index();
  setGallerySystemFn(_thisI);

});
// modal test--------------------------------------------------------

var modal = $('.modal');
var mothUl = $('.thumnail2');
var big2 = $('.big2');
var liText = '<li><a href="#"><span>이미지_01</span></a></li>';
var thumUrl = '../img/gallery/u_thumnail/'
var bigUrl = '../img/gallery/u_big/'
var moLi = mothUl.find('li');
var mosp = mothUl.find('span');
var xbtn = $('.xbtn');
var wrap = $('#wrap');
var modalList = [
  {
    thumI:'gal_01.jpg',
    thumT:'설명 01',
    bigI:'gal_01.jpg',
    bigT:'빅설명 01'
  },
  {
    thumI:'gal_02.jpg',
    thumT:'설명 02',
    bigI:'gal_02.jpg',
    bigT:'빅설명 02'
  },
  {
    thumI:'gal_03.jpg',
    thumT:'설명 03',
    bigI:'gal_03.jpg',
    bigT:'빅설명 03'
  },
  {
    thumI:'gal_04.jpg',
    thumT:'설명 04',
    bigI:'gal_04.jpg',
    bigT:'빅설명 04'
  }
];

var modalLiFn = function(i){
  mothUl.append(liText);
  var moLi = mothUl.find('li');
  var mosp = mothUl.find('span');
  var thLink = thumUrl + modalList[i].thumI;
  var thT = modalList[i].thumT;
  moLi.eq(i).children('a').css({backgroundImage:'url('+ thLink + ')'});
  mosp.text(thT);
};

var i=0;
var modalLen = modalList.length;
for(; i<modalLen; i++){
  modalLiFn(i);
}
big2.hide();
var moLi = mothUl.find('li');
moLi.children('a').on('click', function(e){

  e.preventDefault();
  var thispI = $(this).parent().index();
  big2.css({backgroundImage:'url('+ bigUrl + modalList[thispI].bigI +')'});
  big2.show();
});
xbtn.on('click', function(e){
  e.preventDefault();

  big2.hide();
});

})(jQuery);
