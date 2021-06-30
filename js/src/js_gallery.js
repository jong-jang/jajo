// js_gallery.js

(function($){
// jQuery
var gBox = $('.gal_box');
var gtBoxul = gBox.find('ul');
var gbBox = gBox.find('.big_box');
var bbP = gbBox.children('p');
var thumUrl = '../img/gallery/u_thumnail/';
var bigUrl = '../img/gallery/u_big/';

var gtBoxliFn = function(){
  gtBoxul = gBox.find('ul');
  var setText = '<li><a href="#"><span></span></a></li>';
  gtBoxul.append(setText);
}

var i=0;
for(; i<6; i++){
  gtBoxliFn();
  var gtBoxli = gtBoxul.children('li');
  gtBoxli.eq(i).css({'backgroundImage':'url('+thumUrl+'gal_0'+ (i+1) +'.jpg'+')'})
}

gtBoxli.children('a').on('mouseenter focus',function(e){
  e.preventDefault();
  var tL = $(this).parent().index();
  $(this).siblings().removeClass('act');
  bbP.css({'backgroundImage':'url('+bigUrl+'gal_0'+ (tL+1) +'.jpg'+')'})
  gtBoxli.eq(tL).addClass('act');
});

gtBoxli.children('a').on('mouseleave blur',function(e){
  e.preventDefault();
  gtBoxli.removeClass('act');
});

})(jQuery);