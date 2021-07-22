// jq_test2.js

(function($){
// jQuery
var ctUl = $('.ct_list');
var ctLi = ctUl.children('li');
var ctDiv_1 = ctLi.children('div').eq(0);

var cl = ctLi.outerHeight(true)

$(window).on('scroll', function(){
var sc = $(window).scrollTop();
var i = 0;
for(; i<5; i++){
  var scs = sc-(200+(cl*i));
  var scsc = scs/15;
  ctLi.eq(i).children(ctDiv_1).css({'background-position' : '50% ' + scsc + '%'})
}

});

})(jQuery);