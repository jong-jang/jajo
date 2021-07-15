// header_smartphone.js

(function($){
// jQuery

var gnb = $('#gnb');
var gnbBtn = gnb.find('.gnb_btn').children('button');
gnbBtn.on('click', function(e){
  e.preventDefault();

  gnb.toggleClass('act');
});

})(jQuery);