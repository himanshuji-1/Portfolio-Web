// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    this.reset();
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Add particle effect on mouse move (optional enhancement)
document.addEventListener('mousemove', function(e) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Add some CSS for the cursor trail effect
    cursor.style.position = 'fixed';
    cursor.style.width = '6px';
    cursor.style.height = '6px';
    cursor.style.background = '#00ff88';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.opacity = '0.7';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(cursor);
    
    // Remove the trail element after animation
    setTimeout(() => {
        cursor.style.opacity = '0';
        setTimeout(() => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        }, 300);
    }, 100);
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    
    if (heroTitle && heroText) {
        // Reset content
        heroTitle.style.opacity = '0';
        heroText.style.opacity = '0';
        
        // Start typing effect
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            typeWriter(heroTitle, 'HIMANSHU MUDGAL', 150);
        }, 500);
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            typeWriter(heroText, 'Full Stack Developer • Gamer • Coder', 50);
        }, 2000);
    }
});

// Add glitch effect to project cards on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Add CSS for glitch effect dynamically
const glitchCSS = `
@keyframes glitch {
    0% { transform: translateY(0); }
    20% { transform: translateY(-2px) translateX(2px); }
    40% { transform: translateY(0) translateX(-2px); }
    60% { transform: translateY(-1px) translateX(1px); }
    80% { transform: translateY(1px) translateX(-1px); }
    100% { transform: translateY(0); }
}
`;

// Inject glitch CSS
const style = document.createElement('style');
style.textContent = glitchCSS;
document.head.appendChild(style);

// Tech stack items hover sound effect (visual feedback)
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 15px rgba(255, 107, 53, 0.5)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '';
    });
});

// Progressive loading for project images
document.querySelectorAll('.project-image').forEach((img, index) => {
    img.style.animationDelay = `${index * 0.2}s`;
    img.style.animation = 'fadeInUp 0.6s ease forwards';
});

// Add fade-in animation CSS
const fadeInCSS = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

style.textContent += fadeInCSS;

// Contact form enhancements
const form = document.querySelector('.contact-form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Matrix rain effect for background (optional)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment the line below to enable matrix rain effect
// createMatrixRain();