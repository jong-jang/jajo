(function($){
    var win=$(window);
    var info=$('.info');

    // 기능

    // 함수
    var setWinHFn = function(){
        var winH = win.outerHeight();
        info.css({height:winH + 'px'});
    };
    setWinHFn();

    // ====================================
    // 이벤트
    win.on('resize',function(){
        setWinHFn();
    });
})(jQuery);