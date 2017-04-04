// siema carousel
// var mySiema = new Siema({
//       perPage: 1,
//       loop: true,
//       duration: 600,
//       easing: 'cubic-bezier(.11,.73,.57,1.53)',
//     });
new Siema({
  selector: '.siema',
  duration: 500,
  easing: 'cubic-bezier(.11,.73,.57,1.53)',
  perPage: 1,
  loop: true,
  // onInit: function(){},
  // onChange: function(){},
});

// changing cursor on click on siema hover
$(".img-siema").on("mousedown touchstart", function(e) {
  e.preventDefault();
  $(this).addClass('grabbing');
});

$(".img-siema").on("mouseup touchend", function(e) {
  e.preventDefault();
  $(this).removeClass('grabbing');
});

// setInterval(function() {
//   $('.next').toggle('bounce',{times: 30},"slow");
// }, 10000);



$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'easeInOutQuart', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  // bouncing button on bottom
  setInterval(function() {
    $('.img-arrow').effect("bounce",{times: 5},600);
  }, 2000);
});



function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu-center ul li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
