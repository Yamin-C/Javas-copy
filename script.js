$(document).ready(function ($) {


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    dots: true
                }
            }
        ]
    });




});



