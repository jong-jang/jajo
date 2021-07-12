// jq_test1.js

(function($){
// jQuery
var wrap = $('#wrap');
var hB = $('#headBox');
var navi = $('#navi');
var naLi = navi.find('li');
var naA = naLi.children('a');

$(window).on('scroll', function(){
  var sT = $(this).scrollTop();

  console.log(hB.scrollTop());
  hB.scrollTop(sT);
});

naA.on('click', function(e){
  e.preventDefault();

  var tI = $(this).parent().index();

  var top = wrap.children().eq(tI).offset().top;
  if (tI == 0){
    $(window).scrollTop(0);
  }else{
  $(window).scrollTop(top);
  }
});



})(jQuery);