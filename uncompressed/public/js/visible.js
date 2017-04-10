// $.fn.inView = function(){
//   //Window Object
//   var win = $(window);
//   //Object to Check
//   obj = $(this);
//   //the top Scroll Position in the page
//   var scrollPosition = win.scrollTop();
//   //the end of the visible area in the page, starting from the scroll position
//   var visibleArea = win.scrollTop() + win.height();
//   //the end of the object to check
//   var objEndPos = (obj.offset().top + obj.outerHeight());
//   return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false);
// };
//
// $(window).on('scroll', loadContainer);
//
// var runHome = function(){
//   var home = $('#home');
//   if( !$("#home").visible() ){
//     $(window).on('scroll', loadContainer);
//     return 0;
//   } else {
//
//   };
//
//
//   $(window).on('scroll', loadContainer);
//   return 0;
// };
// var runPortfolio = function(){
//   $(window).on('scroll', loadContainer);
//   return 0;
// };
// var runAbout = function(){
//   $(window).on('scroll', loadContainer);
//   return 0;
// };
// var runContact = function(){
//   $(window).on('scroll', loadContainer);
//   return 0;
// };
//
//
//
// function loadContainer () {
//   if ( $("#home").visible()) {
//     console.log("home");
//     $(window).off('scroll');
//     runHome();
//   }
//   if ( $("#portfolio").inView()) {
//     console.log("portfolio");
//     $(window).off('scroll');
//     runPortfolio();
//   }
//   if ( $("#about").inView()) {
//     console.log("about");
//     $(window).off('scroll');
//     runAbout();
//   }
//   if ( $("#contact").inView()) {
//     console.log("contact");
//     $(window).off('scroll');
//     runContact();
//   }
// }
