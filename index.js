document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Testimonial Carousel Logic
    const carousel = document.getElementById('carousel');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let index = 0;

    function showSlide(i) {
        if (i >= cards.length) index = 0;
        else if (i < 0) index = cards.length - 1;
        else index = i;
        
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => showSlide(index + 1));
    prevBtn.addEventListener('click', () => showSlide(index - 1));

    // Auto-scroll testimonials
    setInterval(() => showSlide(index + 1), 5000);

    // Scroll Reveal Animation (Basic)
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 400;
            if (top >= offset) {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }
        });
    });
});