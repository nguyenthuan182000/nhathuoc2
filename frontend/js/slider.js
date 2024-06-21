$(document).ready(function () {
    $(".my-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".slider-health").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".slider-product-subject").slick({
        slidesToShow: 6,
        slidesToScroll: 12,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".slider-stick").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
