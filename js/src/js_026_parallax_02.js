// js_026_parallax_02.js

(function($){
  // 변수
  var win = $(window);
  var parallax = $('.parallax');
  var parList = parallax.children('div');

  // 기능
  var winH = win.outerHeight(); // clientHeight
  var parLen = parList.length;

  // test
  var setParallaxFn = function(move){
    // parList.eq(6).css({transform:'translateY('+ move/7*0 +'px)'});
    // parList.eq(5).css({transform:'translateY('+ move/7*1 +'px)'});
    // parList.eq(4).css({transform:'translateY('+ move/7*2 +'px)'});
    // parList.eq(3).css({transform:'translateY('+ move/7*3 +'px)'});
    // parList.eq(2).css({transform:'translateY('+ move/7*4 +'px)'});
    // parList.eq(1).css({transform:'translateY('+ move/7*5 +'px)'});
    // parList.eq(0).css({transform:'translateY('+ move/7*6 +'px)'});
    var i=0;
    var moveResult = move/parLen;
    for(; i<parLen; i++){
      parList.eq(i).css({transform:'translateY('+ moveResult*(parLen-i) +'px)'});
      // parList.eq(i).css({bottom:-moveResult*(parLen-1) + 'px'});
    }
  };
  
  // 함수
  var moveImageFn = function(e){
      var winScroll = win.scrollTop();
      // console.log(winScroll);
      setParallaxFn(winScroll);
  }
  // 이벤트
  win.on('scroll', moveImageFn);
})(jQuery);
