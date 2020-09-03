(function ($) {
  "use strict";

    /*============================================
               Data Background
      ==============================================*/
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

     /*============================================
               Mean menu
      ==============================================*/
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "992"
  });

   /*============================================
            Sticky
      ==============================================*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });

   /*============================================
               One Page Nav
      ==============================================*/

  var top_offset = $('.header-area').height() - 10;
  $('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

     /*============================================
                Counter
      ==============================================*/
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

    /*============================================
                Animation on scroll
      ==============================================*/

  AOS.init({
    easing: 'ease-out-back',
    duration: 1500
  });
  /*============================================
                Testimonial active
      ==============================================*/
  $('.author-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.comment-active',
  });
  
  $('.comment-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.author-active',
    dots: true,
    speed: 300,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'<i class="fal fa-angle-left left-arrow">',
    nextArrow:'<i class="fal fa-angle-right right-arrow">',
  
  });

    /*============================================
                Brand active
      ==============================================*/

  $('.brand-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
   /*============================================
               Preloader
      ==============================================*/
  $(window).on('load', function() {
    if ($('.preloader').length) {
        $('.preloader').fadeOut('slow');
    }
});

    /*============================================
                04: Back to top button
      ==============================================*/

            var $backToTopBtn = $('.back-to-top');

            if ($backToTopBtn.length) {
                var scrollTrigger = 400, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $backToTopBtn.addClass('show');
                    } else {
                        $backToTopBtn.removeClass('show');
                    }
                };
    
                backToTop();
    
                $(window).on('scroll', function () {
                    backToTop();
                });
    
                $backToTopBtn.on('click', function (e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }


})(jQuery);
