$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#AboutSyl').offset().top }, 'slow');
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

