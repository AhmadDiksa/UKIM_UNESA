// Smooth scrolling effect
let scrollPosition = window.scrollY;
let targetScrollPosition = window.scrollY;
let isScrolling = false;

const smoothScroll = () => {
    if (isScrolling) {
        scrollPosition += (targetScrollPosition - scrollPosition) * 0.1;
        window.scrollTo(0, scrollPosition);

        // Stop scrolling when close enough to target position
        if (Math.abs(targetScrollPosition - scrollPosition) < 0.5) {
            isScrolling = false;
        } else {
            requestAnimationFrame(smoothScroll);
        }
    }
};

window.addEventListener('wheel', (event) => {
    // Prevent default scrolling
    event.preventDefault();

    // Calculate the target scroll position based on wheel delta
    targetScrollPosition += event.deltaY * 0.5; // Adjust the multiplier for scroll speed
    targetScrollPosition = Math.max(0, Math.min(document.body.scrollHeight - window.innerHeight, targetScrollPosition));
    
    if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
    }
}, { passive: false });


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.vision-item');
    const contents = document.querySelectorAll('.content');

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all contents
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to target content
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
    
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.logo-carousel-track');
    const logos = Array.from(carouselTrack.children);

    // Duplicate logos for seamless animation
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        carouselTrack.appendChild(clone);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Vision Section Animation
    const items = document.querySelectorAll('.vision-item');
    const contents = document.querySelectorAll('.content');

    items.forEach(item => {
        item.addEventListener('click', () => {
            contents.forEach(content => content.classList.remove('active'));
            const target = item.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    const carouselTrack = document.querySelector('.logo-carousel-track');
    const logos = Array.from(carouselTrack.children);
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        carouselTrack.appendChild(clone);
    });

    // Scroll Animation
    const animatedElements = document.querySelectorAll('.vision, .updates, .card, .footer, .hero-content');
    
    const animateOnScroll = () => {
        animatedElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                el.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // Initial check in case elements are in view on page load
    animateOnScroll();
});

// Set the date we're counting down to
const countdownDate = new Date("Jan 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the corresponding HTML elements
    document.getElementById("days").innerHTML = `<h4>${days}</h4><span>Days</span>`;
    document.getElementById("hours").innerHTML = `<h4>${hours}</h4><span>Hours</span>`;
    document.getElementById("minutes").innerHTML = `<h4>${minutes}</h4><span>Minutes</span>`;
    document.getElementById("seconds").innerHTML = `<h4>${seconds}</h4><span>Seconds</span>`;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "<h4>Event Started</h4>";
    }
}, 1000);
