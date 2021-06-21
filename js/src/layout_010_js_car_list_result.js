// // -----------------------------------------------------
// var ulE = document.getElementsByTagName('ul')[0];
// // ----------------------------------------------------------------------
// var makeLi = function(listData){
//   var mLi = document.createElement('li');
//   mLi.setAttribute('tabindex', 0);
//   var insertCode = '<div class="base"><span></span></div><div class="other none"><dl><dt></dt><dd></dd><dd class="btn"><button><span></span></button></dd><dd class="btn"><a><span></span></a></dd></dl></div><div class="line_focus"><div class="out_01"></div><div class="out_02"></div><div class="out_03"></div><div class="out_04"></div></div>';

//   mLi.innerHTML = insertCode;

//   var base = mLi.getElementsByClassName('base')[0];
//   var blindS = base.getElementsByTagName('span')[0]; // blind 처리할 span
//   var divO = mLi.getElementsByTagName('div')[1];
//   var otheR = mLi.getElementsByClassName('other')[0];
//   var dL = otheR.getElementsByTagName('dl')[0];
//   var dT = dL.getElementsByTagName('dt')[0]; // dt
//   var ddA = dL.getElementsByTagName('dd')[0]; // dd1
//   var ddB = dL.getElementsByTagName('dd')[1]; // dd2
//   var ddC = dL.getElementsByTagName('dd')[2]; // dd3
//   var ddbB = ddB.getElementsByTagName('button')[0]; // dd1에 버튼
//   var ddbBS = ddbB.getElementsByTagName('span')[0]; // dd1에 버튼에 span
//   var ddCa = ddC.getElementsByTagName('a')[0]; // dd3 에 a태그
//   var ddCaS = ddCa.getElementsByTagName('span')[0]; // dd3에 a태그에 span
//   var lineF = mLi.getElementsByClassName('line_focus')[0];

//   blindS.setAttribute('class', 'blind');
//   ddCaS.setAttribute('class', 'blind');
//   blindS.innerText = listData.kindn;
//   base.style.backgroundImage = 'url(' + listData.kiurl + ')';
//   dT.innerText = listData.kind;
//   ddA.innerText = listData.nam;+
//   ddbB.setAttribute('type', 'button');
//   ddbBS.setAttribute('class', 'blind');
//   ddCa.setAttribute('href', '#');
//   ddbB.innerText = '';
//   ddCaS.innerText = '상세내용보기';
  
//   ulE.appendChild(mLi);
// }
// // -------------------------------------------------------------------------
// var imgUrl = '../img/icon/';
// var cardData = [
//   {
//     kindn : '상품이미지 이름_001',
//     kiurl : 'ic01.svg',
//     kind : '커피',
//     nam : '온메리카노'
//   },
//   {
//     kindn : '상품이미지 이름_002',
//     kiurl : 'ic02.svg',
//     kind : '에이드',
//     nam : '똥'
//   },
//   {
//     kindn : '상품이미지 이름_003',
//     kiurl : 'ic03.svg',
//     kind : '커피피',
//     nam : '상품이름_003'
//   },
//   {
//     kindn : '상품이미지 이름_004',
//     kiurl : 'ic04.svg',
//     kind : '스무디',
//     nam : '상품이름_004'
//   },
//   {
//     kindn : '상품이미지 이름_005',
//     kiurl : 'ic05.svg',
//     kind : '스무디디',
//     nam : '상품이름_005'
//   }
// ];
// // --------------------------------------------------------------------------------
// function MaCard (url , data){
//   this.kindn = data.kindn;
//   this.kiurl = url + data.kiurl;
//   this.kind = data.kind;
//   this.nam = data.nam
// };
// // ------------------------------------------------------------------------------
// var i = 0;
// var CardL = cardData.length;
// var setCard;

// for(; i<CardL ; i++){
//   setCard = new MaCard(imgUrl, cardData[i]);
//   makeLi(setCard);
// }
// // -------------------------------------------------------------------------
// 1
var product = document.getElementsByClassName('product')[0];
// 2
// var makeLi = document.createElement('li');
// 3
// product.appendChild(makeLi);
// 4
// var makeLi2 = document.createElement('li');
// product.appendChild(makeLi2);
// 5
// var makeLi3 = document.createElement('li');
// product.appendChild(makeLi3);
// var makeLi4 = document.createElement('li');
// product.appendChild(makeLi4);
// var makeLi5 = document.createElement('li');
// product.appendChild(makeLi5);
// 6
var makeLiFn = function(data){
  var makeLi = document.createElement('li');
  makeLi.setAttribute('tabIndex', '0');
  product.appendChild(makeLi);
// 6-1
  var liContent = '<div class="base"><span></span></div><div class="other none"><dl><dt></dt><dd></dd><dd><button type="button"><span></span></button></dd><dd><a href="#"><span></span></a></dd></dl></div><div class="line_focus"></div>';
  makeLi.innerHTML = liContent;
// ----------------------------------------------------------------
  var base = makeLi.getElementsByClassName('base')[0];
  base.style.backgroundImage = 'url('+ data.baseBg +')';
  
  var baseSpan = base.getElementsByTagName('span')[0];
  baseSpan.innerText = data.basePar;

  var otherArea = makeLi.getElementsByClassName('other')[0]; 
  var cardTitle = otherArea.getElementsByTagName('dt')[0];
  cardTitle.innerText = data.cardTitle;

  var cardNarr = otherArea.getElementsByTagName('dd');
  cardNarr[0].innerText = data.cardNarr;
  // cardNarr[1]
  var cardBtnSpan = cardNarr[1].getElementsByTagName('span')[0];
  cardBtnSpan.innerText = data.cardDetailBtn;

  var cardLink = cardNarr[2].getElementsByTagName('a')[0];
  cardLink.setAttribute('href', data.cardLink);

  var cardLinkSpan = cardLink.getElementsByTagName('span')[0];
  cardLink.setAttribute('title', data.cardLinkNarr);
  cardLinkSpan.innerText = data.cardLinkNarr;
// ------------------------------------------------------------------
};
// 8
// 8-1 객체만들기
var cardListData = [
  {
    baseImage : 'ic01.svg',
    baseParagraph : '카드 이미지 샘플_001',
    Title : 'animal',
    detail : '상품 디테일 설명',
    buttonNarration : '상세보기',
    linkUrl : 'http://naver.com',
    detailPageNarration : '동물 내용 상세 보기',
    settingColor : '#fdd'
  },
  {
    baseImage : 'ic02.svg',
    baseParagraph : '카드 이미지 샘플_002',
    Title : 'fish',
    detail : '상품 디테일 설명',
    linkUrl : 'http://daum.com',
    detailPageNarration : '물고기 내용 상세 보기',
    settingColor : '#dfd'
  },
  {
    baseImage : 'ic03.svg',
    baseParagraph : '카드 이미지 샘플_003',
    Title : 'fruit',
    detail : '상품 디테일 설명',
    linkUrl : 'http://google.com',
    detailPageNarration : '과일 내용 상세 보기',
    settingColor : '#ffd'
  },
  {
    baseImage : 'ic04.svg',
    baseParagraph : '카드 이미지 샘플_004',
    Title : 'beef',
    detail : '상품 디테일 설명',
    linkUrl : 'http://naver.com',
    detailPageNarration : '고기 내용 상세 보기',
    settingColor : '#faa'
  }
];
// 9

var imgUrl = '../img/icon/';
function SetCardData(url, data){
  this.baseBg = url + data.baseImage;
  this.basePar = data.baseParagraph;
  this.cardTitle = data.Title;
  this.cardNarr = data.detail;
  this.cardDetailBtn = data.buttonNarration || '상세보기';
  this.cardLink = data.linkUrl;
  this.cardLinkNarr = data.detailPageNarration;
}


var i = 0;
var cardLen = cardListData.length;
var setCard;
for(; i<cardLen; i++){
  setCard = new SetCardData(imgUrl, cardListData[i]);
  makeLiFn(setCard);
}

// 

var productLi = product.getElementsByTagName('li');
// console.log(productLi);
// var productLiOther = productLi[0].getElementsByClassName('other')[0];

var addAct = function(n){
  return function(){
    var productLiOther = productLi[n].getElementsByClassName('other')[0];
    productLiOther.style.display = 'block';
    setTimeout(function(){
      productLi[n].classList.add('act');
    }, 100);
  }
}
var removeAct = function(n){
  return function(){
    var productLiOther = productLi[n].getElementsByClassName('other')[0];
    productLi[n].classList.remove('act');
    setTimeout(function(){
      productLiOther.style.display = 'none';
    }, 300);
  };
};

var liEventAd = function(n){
  productLi[n].addEventListener('focus', addAct(n));
  productLi[n].addEventListener('mouseenter', addAct(n));
  
  var liLink = productLi[n].getElementsByTagName('a')[0];
  
  liLink.addEventListener('blur', removeAct(n));
  productLi[n].addEventListener('mouseleave', removeAct(n));
}

var liLen = productLi.length;
var i = 0;
for(;i<liLen;i++){
  liEventAd(i);
}
