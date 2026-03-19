// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate Hamburger
    hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));

// Testimonial Carousel Logic
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIdx = 0;

function showTestimonial(index) {
    testimonials.forEach(card => card.classList.remove('active'));
    testimonials[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % testimonials.length;
    showTestimonial(currentIdx);
});

prevBtn.addEventListener('click', () => {
    currentIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIdx);
});

// Smooth Scroll Offset Adjustment for Fixed Header
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 80);
});