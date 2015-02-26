/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Para el cambio de imagen de fondo del primer slide
$(function() {
    var images = [
        'img/juegos/bg1.jpg',
        'img/juegos/bg2.jpg',
    ];
    var i = 0;

    function changeBackground() {
        $('header')
            .animate({opacity: 0.25}, 'slow')
            .animate({opacity: 1})
            .css('background-image', function () {
                if (i >= images.length) {
                    i = 0;
                }
                return 'url(' + images[i++] + ')';
            });
    }
    // Call it on the first time
    changeBackground();
    // Set an interval to continue
    setInterval(changeBackground, 3000);
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
