
// Animated Headline

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 *
*/
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});


// Animated Headline

jQuery(document).ready(function(s){function e(e){e.each(function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})}function a(i){var e=c;i.each(function(){var i=s(this);if(i.hasClass("loading-bar"))e=h,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},u);else if(i.hasClass("clip")){var a=i.find(".cd-words-wrapper"),t=a.width()+10;a.css("width",t)}else if(!i.hasClass("type")){var d=0;i.find(".cd-words-wrapper b").each(function(){var i=s(this).width();i>d&&(d=i)}),i.find(".cd-words-wrapper").css("width",d)}setTimeout(function(){n(i.find(".is-visible").eq(0))},e)})}function n(s){var i=r(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout(function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},C),setTimeout(function(){t(i,f)},m)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length;d(s.find("i").eq(0),s,a,p),l(i.find("i").eq(0),i,a,p)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},w,function(){o(s,i),t(i)}):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),o(s,i),setTimeout(function(){n(i)},h),setTimeout(function(){s.parents(".cd-words-wrapper").addClass("is-loading")},u)):(o(s,i),setTimeout(function(){n(i)},c))}function t(s,i){s.parents(".cd-headline").hasClass("type")?(l(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},w,function(){setTimeout(function(){n(s)},v)})}function d(i,e,a,t){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout(function(){n(r(e))},c):setTimeout(function(){d(i.next(),e,a,t)},t),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var l=r(e);o(e,l)}}function l(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),e||setTimeout(function(){n(i)},c)):setTimeout(function(){l(s.next(),i,e,a)},a)}function r(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function o(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}var c=2500,h=3800,u=h-3e3,p=50,f=150,C=500,m=C+800,w=600,v=1500;e(s(".cd-headline.letters").find("b")),a(s(".cd-headline"))});




//Contact form dynamic
(function($) {
    'use strict';

    // Get the form.
    var form = $('#mini-contact-form');

    // Get the messages div.
    var formMessages = $('.mini-send-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('text-danger');
                $(formMessages).addClass('text-success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#mini-contact-form text-field').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('text-success');
                $(formMessages).addClass('text-danger');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent.');
                }
            });
    });

})(jQuery);


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        });
        event.preventDefault();
    });
});

/* ---------------------------------------------
  jQuery Site Preloaded animation
 --------------------------------------------- */
$(window).on('load', function() {
    $("#mini-loader").fadeOut(500);
});

/* ---------------------------------------------
 Header sticky style.
--------------------------------------------- */
$(window).on('scroll', function () {
    var windowSize = $(window).width();
    if (windowSize > 1 && $(this).scrollTop() > 1) {
        $('.sticky-header').addClass('is_sticky');
        document.getElementById("imgLogo").src = 'img/syl-logo-black.png';
        $('.navbar').removeClass('navbar-dark');
        $('.navbar').addClass('navbar-light');


    }
    else {
        $('.sticky-header').removeClass('is_sticky');
        document.getElementById("imgLogo").src = 'img/syl-logo.png';
        $('.navbar').addClass('navbar-dark');
        $('.navbar').removeClass('navbar-light');
    }
});







