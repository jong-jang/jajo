// js_mousetest.js

(function($){
// jQuery
var Box = $('.box');

// Box.on('mousemove', function(e){
  // x = e.clientX;
  // y = e.clientY;
  // console.log(x,y);
// });
// Box.on('mouseup mousedown', function(e){
  // x = e.clientX;
  // y = e.clientY;
  // console.log(x,y);
// });
// Box.on('dblclick', function(e){
  // x = e.clientX;
  // y = e.clientY;
  // console.log(x,y);
// });

Box.on('touchstart touchend', function(e){
  var x = e.clientX;
  var y = e.clientY;
  console.log(x, y);
});

})(jQuery);