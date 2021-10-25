$(document).ready(function() {
    $('#slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1025,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, ]
    });
})
$(document).ready(function() {
    $('.slide_makeup--item').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1025,
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, ]
    });
})
$(document).ready(function() {
    $('.news__slide').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

    });
})
$(document).ready(function() {
    $('.brand__slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    $('.feadback__content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
    $('.product__footer').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });
});