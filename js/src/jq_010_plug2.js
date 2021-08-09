// jq_010_plug2.js


$.fn.makePlugIn_01 = function(){

  var one = this;
  var btn = one.find('button');
  
  btn.on('click', function(e){
    e.preventDefault();
    one.find('p').css({
      color:'#ff0',
      textShadow:'0.1rem 0.1rem 0 #333'
    });
  });
  
  return one;
}

