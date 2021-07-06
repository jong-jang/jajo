// js_015_bannder_02.js

(function($){
// jQuery
// data 작성

$.ajax({
  url:"../data/banner_02.json",
  context: document.body
}).done(function(data){
  var baseUrl = "../img/gallery/u_big/";
  var viewdata = data;
  

  // 1. 다음버튼 클릭시 슬라이드 넘어가기
  // 2. 이전버튼 클릭시 슬라이드 이전내용 넘어가기

  
  // 변수
  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next');
  var prevBtn = slideBtn.children('.prev');
  
  var viewArea = $('.view_area');
  var viewUl = viewArea.children('ul');
  var viewLi = viewUl.children('li');
  var viewLiLen = viewLi.length;

  var indi = $('.indi');
  var indiUl = indi.children('ul');
  var indiLi = indiUl.children('li');
  var indiBtn = indiLi.children('button');

  var n = 0;
  var permisstion = true;
  
  // -----------------------------------------------
  // 1000. li요소에 각각 내용 삽입

  var viewInnerTextFn = function(i){
    var li = viewLi.eq(i);
    var viewDiv = li.children('div');
    var viewTitle = viewDiv.children('h4');
    var viewCon = viewDiv.children('p');
    var viewLink = viewDiv.find('a');
    
    li.css({'backgroundImage':'url('+baseUrl + viewdata[i].bgImg+')'})
    viewTitle.text(viewdata[i].title);
    viewCon.text(viewdata[i].content);
    viewLink.attr('href', viewdata[i].link);
  };

  
  var indiFn = function(n){
    var indiN = '<li><button type="button"><span class="blind">'+ n +'</span></button></li>';
    indiUl.append(indiN);
  }
  // indicator 생성

  var i = 0;
  for(; i< viewLiLen; i++){
    viewInnerTextFn(i);
    indiFn(i);
  }
  var indiLi = indiUl.children('li');
  var indiBtn = indiLi.children('button');
  // -----------------------------------------------
  
  // 100. 1칸씩 이동
  // 200. 이동 제한(최대값)
  // 300. 무한으로 돌아가게 만들기

  var cloneLi = viewLi.eq(-1).clone();
  viewUl.prepend(cloneLi);
  var newViewLi = viewUl.children('li');
  var newLiLen = newViewLi.length;
  // ul의 길이를 변경
  viewUl.css({width:newLiLen*100 + '%', position:'relative', left:-100+'%'});
  newViewLi.css({width:100/newLiLen+'%'})
  // ----------------------------------------------------------------

  var n = 0;
  var perminssion = true;

  nextBtn.on('click', function(e){
    e.preventDefault();

    if(perminssion){
      perminssion=false;
      n++;

      if(n > viewLiLen-1){
        n = 0;
        viewUl.css({marginLeft:100 + '%'});

      }
      viewUl.animate({marginLeft:(-100*n) + '%'}, function(){
        var indiI= indiLi.eq(n);
        indiI.css({width:90 + 'px', backgroundColor: '#ac0' , borderRadius:20+'px'})
        indiI.siblings().css({width:30 + 'px' ,backgroundColor: '#fff', borderRadius:100 + '%'});
        perminssion=true;
      });

    }
    
  });

  prevBtn.on('click', function(e){
    e.preventDefault();

    if(perminssion){
      perminssion=false;
      n--;
      viewUl.animate({marginLeft:(-100*n) + '%'}, function(){

        var indiI= indiLi.eq(n);
        indiI.css({width:90 + 'px', backgroundColor: '#ac0' , borderRadius:20+'px'})
        indiI.siblings().css({width:30 + 'px' ,backgroundColor: '#fff', borderRadius:100 + '%'});

        if(n < 0){
          n = viewLiLen-1;
          var lastMv = -100 * n + '%';
          viewUl.css({marginLeft:lastMv});
        }
        perminssion=true;


      });

    }
    
  });

  indiBtn.on('mouseenter focus' , function(e){
    e.preventDefault();
    var thisI = $(this).parent().index();
    var indiI = indiLi.eq(thisI);

    indiI.css({width:90 + 'px', backgroundColor: '#ac0' , borderRadius:20+'px'})
    indiI.siblings().css({width:30 + 'px' ,backgroundColor: '#fff', borderRadius:100 + '%'});

    viewUl.stop().animate({marginLeft:-100 * thisI + '%'});
    
  });




  }); // $.ajax().done()

})(jQuery);