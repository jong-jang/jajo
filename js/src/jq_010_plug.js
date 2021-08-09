// jq_010_plug.js

(function($){

var one = $('.one');
var btn = one.find('button');

btn.on('click', function(e){
  e.preventDefault();
  one.find('p').css({
    color:'#ff0',
    textShadow:'0.1rem 0.1rem 0 #333'
  });
});

})(jQuery);
