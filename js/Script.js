$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#AboutSyl').offset().top }, 'slow');
        return false;
    });
});
/*
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        dots:false,
        margin:5,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
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

