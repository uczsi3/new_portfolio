$(function(){
  var $doc = $(document);
  var $menu = $('menu');
  var $links = $('menu a');
  var $scroll = $('section');

  $scroll.on('scroll', function(event){
    var scrollPos = $scroll.scrollTop();
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

  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    // $scroll.off('scroll');
    $links.removeClass('active');
    $(this).addClass('active');
    var target = this.hash;
    var $target = $(target);
    var scrollPos = $scroll.scrollTop();
    var val = '57px';
    $scroll.stop().animate({
      'scrollTop': scrollPos + $target.offset().top - $menu.height() + val
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

  $scroll.on('scroll', function(){
    if( $scroll.scrollTop() == 0){
      $menu.css({"background" : "transparent"});
      $('menu ul').css({"background" : "transparent"});
    } else {
      $menu.css({"background" : "rgba(255, 255, 255, 0.7)"});
      $('menu ul').css({"background" : "rgba(255, 255, 255, 0.7)"});
    }
  });

});
