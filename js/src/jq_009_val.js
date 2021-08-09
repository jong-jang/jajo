// jq_009_val.js

(function($){
  
  var inputR = $('#inputResult');
  var sendBtn = $('#send');
  var rowResult = $('.row_result');

  // 함수
  var innerP = function(data, text){
    rowResult.append('<p></p>');
    rowResult.find('p').eq(0).addClass(data);
    rowResult.find('p').eq(0).text(text);
  }
  var innerP2 = function(data, text){
    rowResult.append('<p></p>');
    rowResult.find('p').eq(1).addClass(data);
    rowResult.find('p').eq(1).text(text);
  }
  
  inputR.on('blur', function(){
    var inputValue = inputR.val();
    var typeNumcheck = $.isNumeric(inputValue);

    if(inputValue.length < 2 ){
      innerP('error', '두글자 이상 작성해주세요');
    }else{
      innerP('success', '두글자 이상 작성되었습니다');
      if(!typeNumcheck){
        innerP2('success', '감사합니다');
      }
    }
    if(typeNumcheck){
      var inText = '작성된 내용이 숫자입니다. 내용을 확인하고 다시 작성해주세요.';
      innerP2('error', inText);
    }
  });
  
  sendBtn.on('click', function(e){
    e.preventDefault();
    
    var inputValue = inputR.val();
    console.log(inputValue);
  })
})(jQuery);

// const inputR = document.getElementById('inputResult');
// const sendBtn = document.getElementById('send');
// const rowResult = document.getElementsByClassName('row_result')[0];

// const innerP = function(data, text){

//   const mp = document.createElement('p');
  
//   rowResult.appendChild(mp);
//   rowResult.getElementsByTagName('p')[0].classList.add(data);
//   rowResult.getElementsByTagName('p')[0].innerText= text;
// }
// const innerP2 = function(data, text){
//   const mp = document.createElement('p');
  
//   rowResult.appendChild(mp);
//   rowResult.getElementsByTagName('p')[1].classList.add(data);
//   rowResult.getElementsByTagName('p')[1].innerText= text;
// }

// inputR.addEventListener('blur', function(){
//   let inputValue = inputR.value;
//   let typeNumcheck = $.isNumeric(inputValue);
  
//   if(inputValue.length < 2){
//     innerP('error','두글자 이상 작성해주세요');
//   }else{
//     innerP('success','두글자 이상 작성되었습니다');
//     if(!typeNumcheck){
//       innerP2('success','감사합니다');
//     }
//   }
//   if(typeNumcheck){
//     const inText = '작성된 내용이 숫자입니다. 내용을 확인하고 다시 작성해주세요.';
//     innerP2('error', inText);
//   }
// });
// sendBtn.addEventListener('click', function(e){
//   e.preventDefault();

//   let inputValue = inputR.value;
//   console.log(inputValue);
// });
