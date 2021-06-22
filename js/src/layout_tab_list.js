// layout_tab_list.js

(function($){

  var tdiv = $('.tab_list');
  var tul = tdiv.children('ul');
  var tli = tul.children('li');
  var ta = tli.children('a');
  var ctiv = $('.tab_content');
  var cwc = ctiv.children('div');
  var cwcin = cwc.children('div');
  var times = 1000;

  ta.on('click', function(e){
    e.preventDefault();
    var thisI = $(this).parent().index();

    cwcin.eq(thisI).siblings('div').css({display : 'none'});
    cwcin.eq(thisI).stop().fadeIn(times);

  });

})(jQuery);