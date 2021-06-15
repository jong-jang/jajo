// js_006_condition.js

// 삼항연산자
var boxColor = 'black';
var fontColor = 'white';
var borderRadius = 0;

// ----
boxColor="lightGray";
// (boxColor === 'black') ? fontColor = 'white' : fontColor='red'; borderRadius='10px';

// 단수 분기
if (boxColor === 'black'){
  fontColor = 'white';
  borderRadius = 0;
}else {
  fontColor = 'red';
  borderRadius = '10px' ;
}
console.log(fontColor, borderRadius);

/* <style>
#testBox_01 {width:200px; height:50px; background-color: #dda; color:#151515; font-size: 2rem;}
</style> */

var tBox1 = document.getElementById('testBox_01');
// var tBox1 = document.querySelector('#testBox_01');

// tBox1.style.width = '250px';
// tBox1.style.hieght = 'auto';
// tBox1.style.color = '#151515';
// tBox1.style.fontSize = '2rem';
// tBox1.style.backgroundColor = "#dda";

tBox1.style = "width:250px; height:auto; color:#151515; fontSize:2rem; backgroundColor:#dda;"

// console.log(tBox1.style.backgroundColor);
var tBoxW = tBox1.style.width;
if(tBoxW >= '400px'){
  tBox1.style.backgroundColor = '#dda';
  tBox1.style.color = '#fda';
}else{
  tBox1.style.backgroundColor = '#adf';
  tBox1.style.color = '#f00';
}
// --------------------------------------------
var dataN = 75;
var result;
if(dataN > 80){
  result = '당신의 점수는 A입니다.';
}else if(dataN <= 80 && dataN > 70){
  result = '당신의 점수는 B입니다';
}else if(dataN <= 60){
  result = '당신의 점수는 마음속의 A입니다.';
}else {
  result = '당신의 점수는 당신의 생각대로 입니다.';
}
console.log(result);

// ---------------------------------------------
// 다수 분기

var val = parseInt(prompt('당신의 태어난 월을 입력해보세요.'));

console.log(val);
var rel;

switch(val){
  case 1:
    rel = '1월에 태어난 당신-신년과 함께';
  break;
  case 2:
    rel = '2월에 태어나셨군요?- 추웟을텐데';
  case 3:
  case 4:
  case 5:
    rel = "봄에 태어난 당신";
  case 6:
    rel = "정말 좋은시기에 태어나셨군요?";
  break;
  default:
    rel = '네 알겠습니다.';
}
console.log(rel);
