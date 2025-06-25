const toggler = document.getElementById('navToggler');
const navCollapse = document.getElementById('navCollapse');

toggler.addEventListener('click', () => {
    navCollapse.classList.toggle('active');
    toggler.classList.toggle('open');

    // Disable or enable scroll based on navbar state
    if (navCollapse.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
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

// form section


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".appointment-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[placeholder="Name"]');
        const phone = form.querySelector('input[placeholder="(+91)"]');
        const recordNumber = form.querySelector('input[placeholder="Enter your appointment number"]');
        const date = form.querySelector('input[type="date"]');
        const time = form.querySelector('input[placeholder="am. / Pm."]');
        const file = form.querySelector('input[type="file"]');

        const visitReason = form.querySelector('input[name="visit"]:checked');
        const department = form.querySelector('input[name="dept"]:checked');

        // Basic validation
        if (
            name.value.trim() === "" ||
            phone.value.trim() === "" ||
            recordNumber.value.trim() === "" ||
            !date.value ||
            time.value.trim() === "" ||
            !visitReason ||
            !department
        ) {
            alert("Please fill all required fields.");
            return;
        }

        // File validation
        if (file.files.length > 0) {
            const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
            const fileType = file.files[0].type;

            if (!allowedTypes.includes(fileType)) {
                alert("Please upload a valid PDF or image file.");
                return;
            }
        }

        // Time format check
        const timeValue = time.value.trim().toLowerCase();
        if (!(timeValue.includes("am") || timeValue.includes("pm"))) {
            alert("Please enter a valid time format like '10:30 am' or '2:00 pm'.");
            return;
        }

        // Simulate successful submission
        alert("Appointment submitted successfully!");
        form.reset();
    });
});

