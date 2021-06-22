// jq_event_and_display.js

(function($){

  var wrap = $('#wrap');
  var box = $('.box');

  var wrapul = wrap.children('ul');
  var wrapli = wrapul.children('li');
  var libtn = wrapli.children('button');

  var li_001 = wrapli.eq(0);
  var li_002 = wrapli.eq(1);
  var li_003 = wrapli.eq(2);
  var li_004 = wrapli.eq(3);

  var libox_001 = wrapli.eq(0).children('.box');
  var libox_002 = wrapli.eq(1).children('.box');
  var libox_003 = wrapli.eq(2).children('.box');
  var libox_004 = wrapli.eq(3).children('.box');

  li_001.on('click', function(e){
    e.preventDefault();
    libox_001.slideToggle();
  });
  li_002.on('click', function(e){
    e.preventDefault();
    libox_002.slideToggle();
  });
  li_003.on('click', function(e){
    e.preventDefault();
    libox_003.slideToggle();
  });
  li_004.on('click', function(e){
    e.preventDefault();
    libox_004.slideToggle();
  });

})(jQuery);