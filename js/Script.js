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

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        category: '[data-category]',
        weight: function( itemElem ) {
            var weight = $( itemElem ).find('.weight').text();
            return parseFloat( weight.replace( /[\(\)]/g, '') );
        }
    }
});
// bind filter button click
$('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $(buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});
