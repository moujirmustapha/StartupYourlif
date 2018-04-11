$(window).on('scroll', function () {
    var windowSize = $(window).width();
    if (windowSize > 1 && $(this).scrollTop() > 1) {
        $('.header').css("background-color","yellow");
        $('header').css("postion","fixed");

    }
    else {

    }
});