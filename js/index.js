const toggler = document.getElementById('navToggler');
const navCollapse = document.getElementById('navCollapse');

toggler.addEventListener('click', () => {
    navCollapse.classList.toggle('active');
    toggler.classList.toggle('open');
});

// Aos
AOS.init({
    duration: 800,
    once: true
});
// splide js 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#partner-slider', {
        type: 'loop',
        perPage: 4,
        autoplay: true,
        interval: 0,
        speed: 35000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        pagination: false,
        gap: '20px',
        breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 },
        },
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        pagination: true,
        arrows: false,
        gap: '20px',
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#blog-carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        pagination: true,
        arrows: false,
        gap: '20px',
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
        },
    }).mount();
});