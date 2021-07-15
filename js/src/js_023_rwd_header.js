// js_023_rwd_header.js

(function($){
// jQuery

var hdB = $('#headBox');
var navC = $('.nav_content');
var gnbList = $('.gnb_list');

gnbList.on('mouseenter', function(){
  navC.slideDown();
});

gnbList.on('mouseleave', function(){
  setTimeout(function(){
    navC.slideUp();
  }, 500);
});

})(jQuery);