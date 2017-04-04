$(function(){

  var $master = $('.master'),    $masterImg = $('#master-img'),
      $allImg = $('.intro-img'), $allDiv = $('.element'),
      $intro = $('.intro');

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

  var $FM = $('#front-mountain'),
      $MM = $('#middle-mountain'),
      $BM = $('#back-mountain');

  // ****************************
  // ****************************
  // ****************************
  // ****************************
  // ****************************
  // ****************************

  var backgroundIn = function(){
    $('#front-mountain').fadeIn(400);
    setTimeout(function(){
      $('#middle-mountain').fadeIn(400);
    }, 400);
    setTimeout(function(){
      $('#back-mountain').fadeIn(400);
    }, 800);
  };


  // var rotateIn = function(arrEl, arrParam){
  //   $.each(arrEl, function(i){
  //     this.rotate(arrParam[i]);
  //   });
  // };

  var showElements = function(arr){
    setTimeout(function(){
      arr[0].toggle("slide", {'direction': "down"}, 400);
      arr[1].delay(300).toggle("slide", {'direction': "left"}, 400);
      arr[2].delay(150).toggle("slide", {'direction': "left"}, 400);
      arr[3].toggle("slide", {'direction': "right"}, 400);
      arr[4].delay(300).fadeIn(400); //toggle("pulsate", 400);
      arr[5].delay(150).toggle("slide", {'direction': "down"}, 400);
      arr[6].toggle("slide", {'direction': "up"}, 400);
      arr[7].delay(300).toggle("slide", {'direction': "right"}, 400);
      arr[8].delay(150).toggle("slide", {'direction': "down"}, 400);
    }, 1250);
  };

  // var slideOut = function (arr){
  //   setTimeout(function(){
  //     arr[0].animate({left: "+=66.6666%", top: "+=66.6666%" }, 1200, 'easeInOutElastic');
  //     arr[1].delay(800).animate({left: "-=33.3333%", top: "+=66.6666%" }, 1200, 'easeOutExpo');
  //     arr[2].delay(1300).animate({left: "-=66.6666%", top: "+=33.3333%" }, 1200, 'easeOutExpo');
  //     arr[3].delay(300).animate({left: "+=33.3333%", top: "-=33.3333%" }, 1200, 'easeInOutExpo');
  //     arr[4].delay(1500).animate({left: "-=33.3333%", top: "-=33.3333%" }, 1200, 'easeInOutExpo');
  //     arr[5].delay(1100).animate({left: "-=33.3333%", top: "+=33.3333%" }, 1200, 'easeOutExpo');
  //     arr[6].delay(1000).animate({left: "+=66.6666%", top: "-=33.3333%" }, 1200, 'easeOutExpo');
  //     arr[7].delay(350).animate({ top: "-=33.3333%" }, 1200, 'easeOutExpo');
  //     arr[8].delay(400).animate({ top: "-=66.6666%" }, 1200, 'easeOutExpo');
  //   }, 5700 );
  // };

  // var rotateOut = function(arrEl, arrParamFrom, arrParamTo){
  //   setTimeout(function(){
  //     $.each(arrEl, function (i) {
  //       this.rotate({
  //         angle: arrParamTo[i],
  //         animateTo: arrParamFrom[i],
  //         duration: 1000
  //       });
  //     });
  //   }, 1800);
  // };

  var slideInPlace = function(arr){
    setTimeout(function(){
      arr[0].animate({left: "+=33.3333%"}, 600, 'easeInOutExpo').animate({ top: "+=33.3333%" }, 600, 'easeInOutExpo');
      arr[1].delay(100).animate({left: "-=33.333%"}, 600, 'easeInOutExpo').animate({top: "+=33.3333%" }, 600, 'easeInOutExpo');
      arr[2].delay(200).animate({top: "+=66.6666%" }, 600, 'easeInOutExpo');
      arr[3].delay(200).animate({left: "+=66.6666%"}, 600, 'swing').animate({ top: "-=33.3333%"}, 600, 'swing');
      arr[4].delay(300).animate({top: "+=33.3333%" }, 600, 'easeInOutExpo');
      arr[5].delay(300).animate({left: "-=66.6666%"}, 600, 'easeInOutExpo').animate({top: "+=33.3333%"}, 600, 'easeInOutExpo');
      arr[6].delay(300).animate({top: "-=66.6666%"}, 600, 'easeInOutExpo').animate({left: "+=33.3333%"}, 600, 'easeInOutExpo');
      arr[7].delay(300).animate({left: "+=33.3333%",  }, 600, 'easeInOutExpo').animate({top: "-=33.3333%",  }, 600, 'easeInOutExpo');
      arr[8].delay(300).animate({left: "-=66.6666%" }, 600, 'easeInOutExpo').animate({top: "-=66.6666%" }, 600, 'easeInOutExpo');
    }, 2700);
    setTimeout(function(){
      $allDiv.hide();
      $master.fadeIn();
    }, 4200);
  };

  var endIntro = function (){
    setTimeout(function(){
        $('.intro').fadeOut(500);
    }, 0); // 5000);
  };

  var runThatShi = function (arrDiv, arrImg) {
    //         |5 * 4 * 9|      |8 * 3 * 1|      |1 * 2 * 3|
    //         |3 * 8 * 7|  =>  |9 * 6 * 2|  =>  |4 * 5 * 6|
    //         |2 * 6 * 1|      |4 * 7 * 5|      |7 * 8 * 9|

    // var rotIn = [+90, +90, +180, -180, -90, +270, -90, -270, -90];
    // var rot = [-90, -90, -180, +180, +90, -270, +90, +270, +90];
    // var rotOut = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    backgroundIn();
    // // rotateIn(arrDiv, rotIn);
    showElements(arrImg);
    // slideOut(arrDiv);
    slideInPlace(arrDiv);
    // // rotateOut(arrDiv, rotOut, rot);
    endIntro();
  };

  runThatShi($arrDiv, $arrImg);
});




  // function thatShit(){
  // $FM.fadeIn(400);
  // $MM.delay(400).fadeIn(400);
  // $BM.delay(800).fadeIn(400);
  // $arrImg[0].delay(1250).toggle("slide", {'direction': "down"}, 400);
  // $arrImg[1].delay(1550).toggle("slide", {'direction': "left"}, 400);
  // $arrImg[2].delay(1400).toggle("slide", {'direction': "left"}, 400);
  // $arrImg[3].delay(1250).toggle("slide", {'direction': "right"}, 400);
  // $arrImg[4].delay(1550).fadeIn(400); //toggle("pulsate", 400);
  // $arrImg[5].delay(1400).toggle("slide", {'direction': "down"}, 400);
  // $arrImg[6].delay(1250).toggle("slide", {'direction': "up"}, 400);
  // $arrImg[7].delay(1550).toggle("slide", {'direction': "right"}, 400);
  // $arrImg[8].delay(1400).toggle("slide", {'direction': "down"}, 400);
  // $arrDiv[0].animate({left: "+=33.3333%"}, 600, 'easeInOutExpo').animate({ top: "+=33.3333%" }, 600, 'easeInOutExpo');
  // $arrDiv[1].delay(2800).animate({left: "-=33.333%"}, 600, 'easeInOutExpo').animate({top: "+=33.3333%" }, 600, 'easeInOutExpo');
  // $arrDiv[2].delay(2900).animate({top: "+=66.6666%" }, 600, 'easeInOutExpo');
  // $arrDiv[3].delay(2900).animate({left: "+=66.6666%"}, 600, 'swing').animate({ top: "-=33.3333%"}, 600, 'swing');
  // $arrDiv[4].delay(3000).animate({top: "+=33.3333%" }, 600, 'easeInOutExpo');
  // $arrDiv[5].delay(3000).animate({left: "-=66.6666%"}, 600, 'easeInOutExpo').animate({top: "+=33.3333%"}, 600, 'easeInOutExpo');
  // $arrDiv[6].delay(3000).animate({top: "-=66.6666%"}, 600, 'easeInOutExpo').animate({left: "+=33.3333%"}, 600, 'easeInOutExpo');
  // $arrDiv[7].delay(3000).animate({left: "+=33.3333%",  }, 600, 'easeInOutExpo').animate({top: "-=33.3333%",  }, 600, 'easeInOutExpo');
  // $arrDiv[8].delay(3000).animate({left: "-=66.6666%" }, 600, 'easeInOutExpo').animate({top: "-=66.6666%" }, 600, 'easeInOutExpo');
  // $allDiv.delay(4200).hide();
  // $master.delay(4200).fadeIn();
  // $intro.delay(5000).fadeOut(500);
  // }
