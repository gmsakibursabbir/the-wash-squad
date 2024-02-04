// third slider
var swiper = new Swiper(".thirdslider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/// HERO

var swiper = new Swiper(".heroslider", {
    autiHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //washslider
  var swiper = new Swiper(".washslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

// jquery ready start
$(document).ready(function () {
  // jQuery code

  //////////////////////// Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  // make it as accordion for smaller screens
  if ($(window).width() < 992) {
    $(".dropdown-menu a").click(function (e) {
      e.preventDefault();
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }
}); // jquery end
