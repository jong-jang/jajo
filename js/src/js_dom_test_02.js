// js/src/js_dom_test_02.js

var procudeArea = document.getElementsByClassName('product_area')[0];
var product = procudeArea.getElementsByClassName('product')[0];
// ---------------------------------------------------------------------
var dataCheck = {
  link : 'http://naver.com',
  backi : '../img/undro/undrow01.svg',
  imgd : '카드에들어갈 이미지 설명_001',
  cardt : '카드 제목_001'
};
// -------------------------------------------------------------------
var makeLiFn = function(listData){
  var makeLi = document.createElement('li');

  var insertCode = '<a href="#"><div class="img_set"><span class="blind"></span></div><p></p></a>';
  makeLi.innerHTML = insertCode;
// -----------------------------------------------
  var a        = makeLi.getElementsByTagName('a')[0];
  var imgSet   = a.getElementsByClassName('img_set')[0];
  var imgBlind = imgSet.getElementsByTagName('span')[0];
  var p        = a.getElementsByTagName('p')[0];
// ---------------------------------------------------------
  a.setAttribute('href', listData.link);
  imgSet.style.backgroundImage = 'url(' + listData.backi + ')';
  imgBlind.innerText = listData.imgd;
  p.innerText = listData.cardt;
// ----------------------------------------------------
  product.appendChild(makeLi);
} // makeLiFn();

// ----------------------------------------------------
// data 형식 생성
var imgUrl = '../img/undro/';
var cardDataAll = [
  {
    link : 'http://naver.com',
    backi : 'undrow01.svg',
    imgd : '카드에들어갈 이미지 설명_001',
    cardt : '카드 제목_001'
  },
  {
    link : 'http://google.com',
    backi : 'undrow02.svg',
    imgd : '카드에들어갈 이미지 설명_002',
    cardt : '카드 제목_002'
  },
  {
    link : 'http://naver.com',
    backi : 'undrow03.svg',
    imgd : '카드에들어갈 이미지 설명_003',
    cardt : '카드 제목_003'
  },
  {
    link : 'http://daum.com',
    backi : 'undrow04.svg',
    imgd : '카드에들어갈 이미지 설명_004',
    cardt : '카드 제목_004'
  },
  {
    link : 'http://daum.com',
    backi : 'undrow04.svg',
    imgd : '카드에들어갈 이미지 설명_005',
    cardt : '카드 제목_005'
  },
  {
    link : 'http://daum.com',
    backi : 'undrow04.svg',
    imgd : '카드에들어갈 이미지 설명_006',
    cardt : '카드 제목_006'
  },
];

// console.log(imgUrl + cardDataAll[1].imgSrc);

// 실제로 사용하기 위해 위 복합으로 만들어진 data를 개별로 분리해서 쓸수 있게
// 불필요한 data는 불러오지 않게 처리
// 생성자함수를 제작
function MakeCard(url, data){
  this.link = data.link;
  this.backi = url + data.backi;
  this.imgd = data.imgd;
  this.cardt = data.cardt;
}

// var setCard = new MakeCard(imgUrl, cardDateAll[0]);
// console.log(setCard.backi);
// ---------------------------------------------------
// 최종동작
var i = 0;
var setCard;
var cardLen = cardDataAll.length;
for(; i < cardLen; i++){
  setCard = new MakeCard(imgUrl, cardDataAll[i]);
  makeLiFn(setCard);
}
