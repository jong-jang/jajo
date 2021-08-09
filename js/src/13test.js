// 13test.js

(function($){

var indi = $('.indicator');
var indiLi = indi.children('li');
var india = indiLi.children('a');
var product = $('.product');

india.on('click', function(e){
  e.preventDefault();

  var _this = $(this).parent().index(); 
  var liEq = indiLi.eq(_this);

  liEq.addClass('act');
  liEq.siblings().removeClass('act');

  product.find('ul').stop().animate({marginLeft: -100*_this + '%'});
})
  
})(jQuery);
