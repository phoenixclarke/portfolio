// Initialize Swiper carousels with coverflow effect
document.addEventListener('DOMContentLoaded', function() {
    // Dashboard Development Swiper
    const dashboardSwiper = new Swiper('.dashboard-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.dashboard-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.dashboard-swiper .swiper-button-next',
            prevEl: '.dashboard-swiper .swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
        }
    });

    // Data Storytelling Swiper
    const storytellingSwiper = new Swiper('.storytelling-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.storytelling-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.storytelling-swiper .swiper-button-next',
            prevEl: '.storytelling-swiper .swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
        }
    });

    // Training Swiper
    const trainingSwiper = new Swiper('.training-swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.training-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.training-swiper .swiper-button-next',
            prevEl: '.training-swiper .swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
        }
    });
});
