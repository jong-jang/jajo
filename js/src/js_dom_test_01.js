// js_dom_test_01.js
// var product = document.getElementsByClassName('product');
var product = document.getElementsByClassName('product')[0];

var boxMake = function(num){
  var liE = document.createElement('li');
  product.appendChild(liE);
  var aE = document.createElement('a');
  aE.setAttribute('href', '#');
  liE.appendChild(aE);
  var divE = document.createElement('div');
  divE.setAttribute('class', 'img_set');
  divE.append('이미지' + num);
  aE.appendChild(divE);
  var pE = document.createElement('p');
  pE.append('상품명' + num);
  aE.appendChild(pE);
}

var i=0;
var n=10;
for(; i<=n ; i++){
  boxMake(i)
}
