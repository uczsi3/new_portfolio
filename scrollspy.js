$(function(){
  var $doc = $(document);
  var $menu = $('menu');
  var $links = $('menu a');
  var $dropdown = $('#drop a');
  var $section = $('section');

  $section.on('scroll', function(e){

    var scrollPos = $section.scrollTop();

    if( scrollPos != 0){
      $menu.css({"background" : "rgba(0, 0, 0, 0.8)"});
      $("menu ul li a").css({"color" : "rgb(255, 255, 255)"});
      $("menu ul li a").hover(function(){
        $(this).css({"color" : "rgb(0, 0, 0)"});
        $(this).css({"color" : "rgb(255, 255, 255)"});
      });
    } else {
      $menu.css({"background" : "transparent"});
      $("menu ul li a").css({"color" : "rgb(0, 0, 0)"});
      $(".active").css({"color" : "rgb(255, 255, 255)"});
    };

    $links.each(function () {
      var $link = $(this);
      var $target = $($link.attr('href'));
      var targetPos = $target.position().top;
      if (targetPos <= scrollPos && targetPos + $target.height() > scrollPos){
        $links.removeClass('active');
        $link.addClass('active');
      }
    });
  });

  $('menu a[href^="#"]').on('click', function(e){
    // e.preventDefault();
    // $section.off('scroll');

    // $links.removeClass('active');
    // $(this).addClass('active');
    // var closest = $(this).closest('div').attr('.dropdown-content');
    // var closest = $('a').parent('.dropdown-content').attr('id');
    // $('.childElementName').closest('.ancestorName').attr('idName')
    // console.log(closest);

    var target = this.hash;
    var $target = $(target);
    var goTo = $target.position();
    // console.log(goTo);
    var scrollPos = $section.scrollTop();
    $section.stop().animate({
      'scrollTop': scrollPos + goTo.top
    }, 500, 'swing', function () {
      window.location.hash = target;
    });
  });

  $dropdown.on('click', function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    var goTo = $target.position();

    console.log(goTo);

    $section.stop().animate({
      'scrollTop':  goTo.top
    }, 500, 'swing', function () {
      window.location.hash = target;
    });

  });

  // Mobile menu
  $('button.dropbtn').on('click', function(){
    $('div.dropdown-content').toggle();
  });

  $('div.dropdown-content').children().on('click', function(){
    $('div.dropdown-content').toggle();
  })
});
