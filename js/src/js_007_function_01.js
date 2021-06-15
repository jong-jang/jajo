// js/src/js_007_function_01.js

var i = 10;
var j = 3;

// var k = i + j;
// console.log(k);
var k = 0;
function plusFn(a, b){
  var k = a + b;
  console.log(k);
  return k;
}

var r = plusFn(1, 5);
plusFn(4,3);
plusFn(i, j);
plusFn(j, j);
plusFn(i, i);
plusFn(500, 500);

// console.log(k);

// 기명함수 - 선언식
// function 함수의이름(){}

// 익명함수 - 1. 표현식
var myFn = function(a,b){
  var k = a * b;
  console.log(k);
  return k;
};
myFn(5, 5);
myFn(50, 2);
myFn(50, 0);

// ----------------------------------
var fn = function(a){
  console.log(a + '함수 수행');
};
fn('지금 바로');

// 즉시실행함수 (IIFE)
(function(a){
  console.log(a + '동작');
})('지금')

// --------------------------------
function fnSet(n, contry) {
  this.n = n;
  this.make = '우리 부모님';
  this.contry = 'Korea';
  this.future = 'happy';
}
var myName = new fnSet('jj', 'korea');
console.log(myName.contry);
