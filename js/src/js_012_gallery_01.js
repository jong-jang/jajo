// js_012_gallery_01.js

(function($){
// jQuery

var gallery_01 = $('.gallery_01');
var galUl = gallery_01.children('ul');
var galLi = galUl.children('li');

var gal_01_Box = $('.gallery_box_01');
var galP = gal_01_Box.children('p');

var liConvertText = function(){
  return function(event){

    event.preventDefault();
    
    var thisLink = $(this).children('a');
    var thisData = thisLink.attr('data-text');
    
    galP.text(thisData);
  };
};

galLi.on('click', liConvertText());
// ----------------------------------------------

var gal_02 = $('.gallery_02');
var gal_02_box = gal_02.find('.big_image');
var gal_02_list = gal_02.find('li');
var gal2p = gal_02_box.children('p');
var galUrl = '../img/gallery/u_big/';

var gal02_firstText = gal_02_list.eq(0).find('a').attr('data-text');
gal2p.text(gal02_firstText);

var gal2ImgFn = function(){
  return function(e){

    e.preventDefault();

    var select = $(this);
    var selectImg = select.attr('data-image');
    var selectText = select.attr('data-text');
    var useImg = galUrl + selectImg;
    
    gal2p.text(selectText);
    gal_02_box.css({'backgroundImage':'url('+ useImg +')'});
  };
};

gal_02_list.children('a').on('click', gal2ImgFn());

// -----------------------------------------------------------------

// 1. .gallery_03 내부의 li요소를 생성
// 2. 생성되는 li를 내가 만들고자 하는 갯수만큼
// 3. 적용할 data속성을 생성해서 담기 - 차후: 삭제
// 4. 나머지 기능은 위와 동일

var gallery_03 = $('.gallery_03');
console.log(gallery_03);
var gallery_03_Ul = gallery_03.find('ul');


var n = 0;
var set_03_Li = function(n){
  var setText ='<li><a href="#"><span>이미지'+ n +'</span></a></li>';
  return setText;
};

//js는 사용하는 html문서를 기준
var listUrl = '../img/gallery/u_thumnail/';
var bigUrl = '../img/gallery/u_big/'
var galleryImgList = [
  {
    'thumnail':'gal_01.jpg',
    'contents':'001_thumnail_설명',
    'big':'gal_01.jpg',
    'bigNarr':'001_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'gal_02.jpg',
    'contents':'002_thumnail_설명',
    'big':'gal_02.jpg',
    'bigNarr':'002_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'gal_03.jpg',
    'contents':'003_thumnail_설명',
    'big':'gal_03.jpg',
    'bigNarr':'003_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'gal_04.jpg',
    'contents':'004_thumnail_설명',
    'big':'gal_04.jpg',
    'bigNarr':'004_디테일 설명을 작성하시면 됩니다.'
  },
  {
    'thumnail':'gal_05.jpg',
    'contents':'005_thumnail_설명',
    'big':'gal_05.jpg',
    'bigNarr':'005_디테일 설명을 작성하시면 됩니다.'
  }
];
var listContentFn = function() {
  thum=listUrl+galleryImgList[i].thumnail;
  galLink = gallery_03_Ul.children('li').eq(i).children('a')
  galLink.css({'backgroundImage':'url('+ thum +')', color:'#fff'});
  galLink.find('span').text(galleryImgList[i].contents);
};

var galLink;
var galListLen = galleryImgList.length;
for(var i=0; i<galListLen ; i++){
  gallery_03_Ul.append(set_03_Li(i+1));
  listContentFn();
};
var gal_03_big = gallery_03.find('.big_image');
var gal_03_p = gal_03_big.find('p');

var setBigInsertFn = function(n){
  gal_03_big.css({'backgroundImage':'url(' + bigUrl + galleryImgList[n].big + ')', 'backgroundSize':'cover'})
  gal_03_p.text(galleryImgList[n].bigNarr);
};
setBigInsertFn(0);

var gal03Link = gallery_03_Ul.children('li').children('a');
gal03Link.on('click', function(e){
  e.preventDefault();
  var setI = $(this).parent().index();
  setBigInsertFn(setI);
});

})(jQuery);