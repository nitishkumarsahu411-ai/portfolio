// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // Set Current Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active Link Highlighting
        let current = '';
        const sections = document.querySelectorAll('.section, .hero');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const isExpanded = navLinksContainer.classList.contains('active');
        hamburger.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Typing Effect
    const typingText = document.getElementById('typing-text');
    const words = ["B.Tech CSE Student", "Aspiring Software Developer", "Tech Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newWordDelay = 2000;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? erasingDelay : typingDelay;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    if(typingText) {
        setTimeout(type, newWordDelay);
    }

    // Contact Form Submission (Prevent Default for now)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would handle the fetch request here.
            alert('Thank you for your message, Nitish will get back to you soon!');
            contactForm.reset();
        });
    }

    // Download Resume Button Placeholder
    const downloadBtn = document.getElementById('download-resume-btn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Since there's no actual resume file yet, just an alert
            alert('Resume file is not linked yet. Please upload your resume PDF and link it in the code.');
        });
    }
});
