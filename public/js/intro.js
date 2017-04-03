$(function(){

  var $master = $('.master'),    $masterImg = $('#master-img'),
      $allImg = $('.intro-img'), $allDiv = $('.element');

  var $TL = $('.TL'),  $TLimg = $('#TL-img'),
      $TC = $('.TC'),  $TCimg = $('#TC-img'),
      $TR = $('.TR'),  $TRimg = $('#TR-img'),
      $CL = $('.CL'),  $CLimg = $('#CL-img'),
      $CC = $('.CC'),  $CCimg = $('#CC-img'),
      $CR = $('.CR'),  $CRimg = $('#CR-img'),
      $BL = $('.BL'),  $BLimg = $('#BL-img'),
      $BC = $('.BC'),  $BCimg = $('#BC-img'),
      $BR = $('.BR'),  $BRimg = $('#BR-img');

  var $arrImg = [$TLimg, $TCimg, $TRimg, $CLimg, $CCimg, $CRimg, $BLimg, $BCimg, $BRimg],
      $arrDiv = [$TL, $TC, $TR, $CL, $CC, $CR, $BL, $BC, $BR];

  // ****************************
  // ****************************
  // ****************************
  // ****************************
  // ****************************
  // ****************************

  var backgroundIn = function(){
    $('#front-mountain').fadeIn(1500);
    setTimeout(function(){
      $('#middle-mountain').fadeIn(1500);
    }, 800);
    setTimeout(function(){
      $('#back-mountain').fadeIn(900);
    }, 1200);
  };


  // .finish();
  var rotateIn = function(arrEl, arrParam){
    $.each(arrEl, function(i){
      this.rotate(arrParam[i]);
    });
  };
  var showElements = function(arr){
    setTimeout(function(){
      arr[0].toggle("slide", {'direction': "up"}, 800);// toggle("bounce", { times: 2 }, 1000);
      arr[1].toggle("slide", {'direction': "up"}, 800);
      arr[2].toggle("slide", {'direction': "left"}, 800);
      arr[3].delay(500).toggle("slide", {'direction': "right"}, 800);
      arr[4].delay(500).toggle("slide", {'direction': "up"}, 800);
      arr[5].delay(500).toggle("slide", {'direction': "up"}, 800);
      arr[6].delay(1000).toggle("slide", {'direction': "down"}, 800);
      arr[7].delay(1000).toggle("slide", {'direction': "up"}, 800);
      arr[8].delay(1000).toggle("slide", {'direction': "down"}, 800);
    }, 2700);
  };
  var slideOut = function (arr){
    setTimeout(function(){
      arr[0].animate({left: "+=66.6666%", top: "+=66.6666%" }, 1200, 'easeInOutElastic');
      arr[1].delay(800).animate({left: "-=33.3333%", top: "+=66.6666%" }, 1200, 'easeOutExpo');
      arr[2].delay(1300).animate({left: "-=66.6666%", top: "+=33.3333%" }, 1200, 'easeOutExpo');
      arr[3].delay(300).animate({left: "+=33.3333%", top: "-=33.3333%" }, 1200, 'easeInOutExpo');
      arr[4].delay(1500).animate({left: "-=33.3333%", top: "-=33.3333%" }, 1200, 'easeInOutExpo');
      arr[5].delay(1100).animate({left: "-=33.3333%", top: "+=33.3333%" }, 1200, 'easeOutExpo');
      arr[6].delay(1000).animate({left: "+=66.6666%", top: "-=33.3333%" }, 1200, 'easeOutExpo');
      arr[7].delay(350).animate({ top: "-=33.3333%" }, 1200, 'easeOutExpo');
      arr[8].delay(400).animate({ top: "-=66.6666%" }, 1200, 'easeOutExpo');
    }, 5700 );
  };
  var rotateOut = function(arrEl, arrParamFrom, arrParamTo){
    setTimeout(function(){
      $.each(arrEl, function (i) {
        this.rotate({
          angle: arrParamTo[i],
          animateTo: arrParamFrom[i],
          duration: 2000
        });
      });
    }, 8200);
  };
  var slideInPlace = function(arr){
    setTimeout(function(){
      arr[0].animate({left: "-=33.3333%", top: "-=33.3333%" }, 1500, 'easeInOutExpo');
      arr[1].delay(800).animate({top: "-=33.3333%" }, 1500, 'easeInOutExpo');
      arr[2].delay(1200).animate({left: "+=66.6666%", top: "+=33.3333%" }, 1500, 'easeInOutExpo');
      arr[3].delay(300).animate({left: "+=33.3333%"}, 1500, 'swing');
      arr[4].delay(1100).animate({left: "+=33.333%", top: "+=66.6666%" }, 1500, 'easeInOutExpo');
      arr[5].delay(150).animate({left: "-=33.333%"}, 1500, 'easeInOutExpo');
      arr[6].delay(200).animate({left: "-=33.3333%", top: "-=33.3333%"}, 1500, 'easeInOutExpo');
      arr[7].delay(300).animate({left: "+=33.3333%",  }, 1500, 'easeInOutExpo');
      arr[8].delay(800).animate({left: "-=66.6666%" }, 1500, 'easeInOutExpo');
    }, 9700);
    setTimeout(function(){
      $allDiv.fadeOut(100);
      $master.fadeIn();
      $masterImg.fadeIn();
    }, 12000);
  };
  var endIntro = function (){
    setTimeout(function(){
        $('.intro').fadeOut(900);
        console.log('comming');
        $('*').css({"overflow": "visible"});
    }, 12500);
  };
  var mainF = function (arrDiv, arrImg) {
    //         |5 * 4 * 9|      |8 * 3 * 1|      |1 * 2 * 3|
    //         |3 * 8 * 7|  =>  |9 * 6 * 2|  =>  |4 * 5 * 6|
    //         |2 * 6 * 1|      |4 * 7 * 5|      |7 * 8 * 9|

    var rotIn = [+90, +90, +180, -180, -90, +270, -90, -270, -90];
    var rot = [-90, -90, -180, +180, +90, -270, +90, +270, +90];
    var rotOut = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    backgroundIn();
    rotateIn(arrDiv, rotIn);
    showElements(arrImg);
    slideOut(arrDiv);
    rotateOut(arrDiv, rotOut, rot);
    slideInPlace(arrDiv);
    endIntro();
  };

  mainF($arrDiv, $arrImg);

});
