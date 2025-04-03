$(document).ready(function () {
  $(".hero-crousal").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: "linear",
  });
  $(".testimonial-crousal").slick({
    infinite: true,
    arrows: true,
    speed: 500,
    cssEase: "linear",
  });
  $(".tenant-say-review-caro").slick({
    infinite: true,
    arrows: true,
    speed: 500,
    cssEase: "linear",
  });
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 36) {
      $('.header-bottom').addClass('fixed');
  } else {
      $('.header-bottom').removeClass('fixed');
  }
});
