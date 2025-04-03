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
  $(".tentant-say-review").slick({
    infinite: true,
    arrows: true,
    speed: 500,
    cssEase: "linear",
  });
});
