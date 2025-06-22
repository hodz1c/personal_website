// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const message = this.querySelector('#message').value.trim();
        
        if (!name || !email || !message) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error';
            errorMessage.textContent = 'Please fill in all fields.';
            this.appendChild(errorMessage);
            setTimeout(() => errorMessage.remove(), 3000);
            return;
        }
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        this.appendChild(successMessage);
        
        // Reset form
        this.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => successMessage.remove(), 5000);
    });
}

// Button Ripple Effect for .submit-btn
const buttons = document.querySelectorAll('.submit-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const circle = document.createElement('span');
        circle.classList.add('ripple');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
        circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});
