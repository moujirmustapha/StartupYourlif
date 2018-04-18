/*$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height() >1;
        if ($(window).scrollTop() > navHeight) {
            $('navbar').addClass('navfixed');
        }
        else {
            $('navbar').removeClass('navfixed');
        }
    });
});*/
/*
$(window).on('scroll', function () {
    var windowSize = $(window).height();
    if (windowSize > 1 && $(this).scrollTop() > 1) {
        $('.header').css('postion:','fixed');
    }
    else {
        $('.header').css('postion:','absolute');
    }
});*/


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

