// OWL Carousel Init
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        // items: 1,
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

});

// Initialize WOW.JS
new WOW().init();

AOS.init();