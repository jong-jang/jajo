// js_014_bannder_01-2.js

(function($){
// jQuery
// -------------------------------------------------------------------------
// banner_02

var banner_02 = $('.banner_02');
var ban_02_btn = banner_02.children('.btn');
var b02Next = ban_02_btn.children('button').eq(0);
var b02Prev = ban_02_btn.children('button').eq(1);
var b02Product = banner_02.children('.product');
var b02Ul = b02Product.children('ul');
var b02Li = b02Ul.children('li');
var p = ban_02_btn.children('p');
var now = p.find('.now');
var total = p.find('.total');

var b02LiW = b02Li.outerWidth(true);
var b02LiLen = b02Li.length;

total.text(b02LiLen); // 전체 수

var n=0; // 클릭 수
b02Next.on('click', function(e){
  e.preventDefault();
  n++;
  if(n > b02LiLen-1){
    n = 0;
  }
  var mL = -(b02LiW * n) + 'px';
  b02Ul.css({marginLeft:mL});
  now.text(n+1); // 현재광고 번호
});

b02Prev.on('click', function(e){
  e.preventDefault();
  n--;
  if(n < 0){
    n = b02LiLen-1;
  }
  var mL = -(b02LiW * n) + 'px';
  b02Ul.css({marginLeft:mL})
  now.text(n+1);
});

})(jQuery);
