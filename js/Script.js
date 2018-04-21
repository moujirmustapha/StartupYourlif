$(window).on('scroll', function () {
    var windowSize = $(window).height();
    if (windowSize > 1 && $(this).scrollTop() > 1) {
        $('.header_nav').addClass('is_sticky');
    }
    else {
        $('.header_nav').removeClass('is_sticky');
    }
});
/*Scrol down Section About */
$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
        return false;
    });
});

$(function() {
    $('.Syl').click (function() {
        $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
        return false;
    });
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,

        },
        600:{
            items:3,
        },
        1000:{
            items:6,
        }
    }


});

