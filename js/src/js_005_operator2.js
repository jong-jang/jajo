// js_005_operator2.js

// >, <, >=, <=
var n = 5;
var n2 = 20;
var result = n > n2;
console.log(result);

result = n < n2;
console.log(result);

result = n <= n2;
console.log(result);

// 삼항연산자
// (조건) ? 조건의참 : 조건의거짓 ;
var k;
(result) ? k = 'good' : k = 'sad' ;
console.log(k);


// &&, ||
// & : and -> 좌/우를 비교해서 모두 참인지 여부
// | : or  -> 좌/우를 비교해서 둘중 하나라도 참인지 여부 파악
var l;
// (false & true) ? l ="good" : l = 'bad';
(false && true) ? l ="good" : l = 'bad';
console.log(l);
(false || true) ? l ="good" : l = 'bad';
console.log(l);

// 구현의 속도를 높이기위해, &&는 거짓의 상태가,
// &&는 거짓의 상태가 먼저 오는것을,
// || 참의 상태가 먼저 오는 것을
// 코드가 짧은것/가독성이 좋은것을 먼저

// ==, ===
// !=, !==

var t =!true;
console.log(t);

console.log(!(true&&!false));
console.log('????:', !'각');

(10 !== '10') ? t='맞아요!' : t="아니예요";
console.log(t);