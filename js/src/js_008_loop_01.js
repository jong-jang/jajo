// js/src/js_008_loop_01.js

// while
// 시작/끝
var i = 0;
while(i<10){
  console.log(i)
  i++; // i+=1;
}

// do{}while()
var j = 10;
do {
  console.log('j: ', j);
  j++;
}while(j<5);
console.log(j);

// for(조건){수행}

for(var l = 0; l<10 ; l+= 1){
  console.log('l: ', l);
}

var p = 0;
for(;p<7;){
  console.log('p: ', p);
  p += 1;
}
console.log(p);
// ------------------------
for(var l=0; l<10; l +=1){
  console.log('l: ', l);
}
console.log(l);
// ------------
var h = 0;
for(; h<20; h++){
  console.log('h: ', h);
}
h=0;
for(; h<10; h++){
  console.log('h: 2-', h);
}
// --------------------

var yearSelect = document.getElementById('yearSelect');
yearSelect.style.width = '300px';

// var optionElement = document.createElement('option');
// optionElement.setAttribute('value', '2021');
// optionElement.append('2021년');
// yearSelect.appendChild(optionElement);


// yearSelect.innerHTML = optionElement;

// 글자가 채워짐
// yearSelect.append(optionElement);

// js에서 요소를 삽일할 경우에는 
// 1. 해당요소를 생성 - createElement
// 2. 생성요소에 내용을 넣고 - append()
// 3. 담긴 것(요소+내용)을 선택자 내부 앞/뒤에 채워넣기

/*
var y = 2021;
var optionElement;

for(; y > 1800; y--){
var optionElement = document.createElement('option');
optionElement.setAttribute('value', y);
optionElement.append(y + '년');
yearSelect.appendChild(optionElement);
}
*/

var yearSet = function(y) {
  var optionElement = document.createElement('option');
  optionElement.setAttribute('value', y);
  optionElement.append(y + '년');
  yearSelect.appendChild(optionElement);
}

/*
var y = 2021;
var y2 = y - 150;

for(; y> y2; y--){
  yearSet(y);
}
*/

var date = new Date ();
var nowYear = date.getFullYear();
var maxYear = nowYear - 150;
var setYear = nowYear;
for(; setYear > maxYear; setYear--){
  yearSet(setYear);
}
