$(function() {
    $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('#AboutSyl').offset().top }, 'slow');
        return false;
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    owlnav:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:3
        },
        600:{
            items:6
        }
    }
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
