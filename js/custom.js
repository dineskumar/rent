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

  let currentStep = 0;
  const steps = $(".form-step");

  function showStep(index) {
    steps.eq(currentStep).fadeOut(300, function () {
      steps.removeClass("active");
      currentStep = index;
      steps.eq(currentStep).fadeIn(300).addClass("active");
    });
  }

  function validateStep(index) {
    let isValid = true;
    const inputs = steps.eq(index).find("input");
    inputs.each(function () {
      if (!this.checkValidity()) {
        $(this).addClass("invalid");
        isValid = false;
      } else {
        $(this).removeClass("invalid");
      }
    });
    return isValid;
  }

  $(".next-btn").click(function () {
    if (validateStep(currentStep) && currentStep < steps.length - 1) {
      showStep(currentStep + 1);
    }
  });

  $(".prev-btn").click(function () {
    if (currentStep > 0) {
      showStep(currentStep - 1);
    }
  });

  // $("#multiStepForm").on("submit", function (e) {
  //   if (!validateStep(currentStep)) {
  //     e.preventDefault();
  //   } else {
  //     // alert("Form submitted!");
  //   }
  // });

  steps.hide().eq(currentStep).show().addClass("active"); // initialize
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 36) {
    $(".header-bottom").addClass("fixed");
  } else {
    $(".header-bottom").removeClass("fixed");
  }
});
