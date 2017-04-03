
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  // $(document).on('scroll', function(e){
  //   var scrollPos = $('div#home').scrollTop();
  //
  //   if( scrollPos != 0){
  //     $menu.css({"background" : "rgba(0, 0, 0, 0.8)"});
  //     $("menu a").css({"color" : "rgb(255, 255, 255)"});
  //   } else {
  //     $menu.css({"background" : "transparent"});
  //     $("menu a").css({"color" : "rgb(0, 0, 0)"});
  //   };
  // });

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });


});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}
