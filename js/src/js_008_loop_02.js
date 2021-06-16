// js/src/js_008_loop_02.js

// 중복으로 처리되는 반복문
var line = function(){
  console.log('------------------------');
}
// var i = 0;
// for(; i<10;i+=1){
//   console.log('i:',i);
//   if(i === 5){
//     console.log('find it');
//     break;
//   }
// }

// line();

// i=0;
// for(; i<10; i +=1){
//   console.log('i-', i);
  
//   var j = 0;
//   for(; j < i; j+=1){
//     console.log('j:', j);
//   }
// }
// line();

// var a=1;
// var b=1;
// var k=9;
// for(; a<=k ;a++){
//   console.log(a + '단');
//   b=1;
//   for(; b<=k; b++){
//     result = a +'*'+ b + '=' + (a*b);
//     console.log(result);
//   }
//   line();
// }
// for-in
// var fruits = [
//   '바나나', '포도', '오렌지', '자두', '키위'
// ];

// var i = 0;
// for(; i<5; i+=1){
//   console.log(fruits[i])
// }

// 배열을 for-in 문에 사용하는 것은 성능에 매우 영향을 미치므로 X
// for(i in fruits){
//   console.log(fruits[i]);
// }
// for-in은 배열용이 아니라 {객체} 용

// var coffee = {
//   base : '에스프레소',
//   pop : '아메리카노',
//   soft : '카페라떼',
//   sweet : '캬라멜 마키아또'
// };

// coffee.etc = '믹스커피';
// console.log(coffee);

// for(i in coffee){
//   console.log(coffee[i]);
// }
// for in test
// var testList = document.getElementsByClassName('test_list')[0];
// testList.style.padding='10px';
// testList.style.backgroundColor = '#dfdfdf';

// var makeList = function(className, content){
//   var makeLi = document.createElement('li');
//   makeLi.append(content);
//   makeLi.setAttribute('class',className);
//   testList.appendChild(makeLi);
// }
// var i, j, k;
// for(i in coffee){
//   j = coffee[i];
//   k = i;
//   makeList(k, j);
// }
// forEach
var fruits = [
  '바나나', '포도', '오렌지', '자두', '키위', '아보카도'
];

var t=0;
var fLen = fruits.length;
console.log(fLen);
for(;t < fLen; t++){
  console.log(fruits[t]);
}

fruits.forEach(
  function(data, index){
  console.log((index+1),data);
  }
);

// DOM - (document object model) - 선택자
// id : document.getElementById('아이디 이름');
// class: document.getElementsByClassName('클래스이름')[순번];
// tag : document.getElementsByTagName('태그이름')[순번];
// attribute : document.getAttribute('속성명', '속성값');
// allInOne : document.querySelector('css형태의 선택자');
// MultiAllInOne : document.querySelectorAll('css형태의 선택자')[순번];

// makeElement : document.createElement('요소이름');
// makeAttribute : 선택자.setAttribute('속성명', '값');
// insertContent-text 1(내부요소 삭제후 삽입) : 선택자.innerText = '내용';
// insertContent-text 2(내부요소 뒤에 추가) : 선택자.append(내용);
// insertContent-html 1(내부요소 삭제 후 삽입) : 선택자.innerHTML = '코드';
// insertContent-html 2(내부요소 뒤에 추가)) : 선택자.appendChild(코드);
