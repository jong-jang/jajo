// jq_001_import_jQuery.js

(function(x){

  // var h1 = document.getElementsByTagName('h1')[0];
  // var h1Link = h1.getElementsByTagName('a')[0];
  // h1Link.style.fontsize = '16px';
  // h1Link.style.color = '#07f';
  
  var h1 = $('h1');
  var h1Link = h1.children('a');
  var p = $('p');
  var btn = $('button');

  p.hide();
  h1Link.css({'fontSize':'16px', 'color': '#07f'});

  btn.on('click', function(e){
    e.preventDefault();
    p.fadeIn(1000);
  });
})(jQuery);
