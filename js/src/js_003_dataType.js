// ../js/src/js_003_dataType.js

var n = 10;

// 이름() -> 함수 호출
// 이름(매개변수) -> 함수를 호출할 때에는 매개체가 되는 변수를 넣는다.
// 매개변수(parameter) -> 인수(argument) , 인자(parameter) 사실 같은아이를 지칭

var type;

// 숫자:number
var n = 10;
var type = typeof(n);
console.log(n, type);

// 문자:string
var t = 'text';
type = typeof(t);
console.log(t, type);

// 불리언(boolean) : true, false
var bool = true;
type = typeof(bool);
console.log(bool, type);

var nn = null;
type = typeof(nn);
console.log(nn, type);

var und = undefined;
type = typeof(und);
console.log(und, type);

console.log('my:', my)
var my;
// hoistion 현상 : 변수(함수)를 먼저 생성하지 않더라도, 상단으로 끌어올려지는 현상

// var -> let, const

var line = '-----------------------------------------------';
console.log(line);

// 무엇에대한 정의를 판단하는 것 -> 객체 : object -> {}
// 순서를 가질 수 없다.
var obj = { 
  'samsung' : 'galaxy',
  'apple' : 'iphone',
  'google' : 'pixel',
  'ms' : 'surface',
  'other brand' : 'smart phone'
};
console.log(obj['other brand']);
console.log(obj.samsung);
console.log(obj.ms);

type = typeof(obj);
console.log(obj, type);

console.log(line);
// 목록의 나열 -> 배열 : array -> []
// css는 첫번째를 1, js는 첫번째를 0으로 판단
// 순서를 가진다.
var ary = [
  'sansung', 'ms', 'google', 'lg', 'xiaomi'
];
console.log(ary);
console.log(ary[2]);
type = typeof(ary);
console.log(type);

var con; 
con = obj.constructor === Object;
console.log('{} :', con);

con = ary.constructor === Object;
console.log('[]:',con);

console.log(line);

function myFn(n){
  var result = n +'님 어서오세요';
  return result;
}
console.log(myFn('jjh'));
