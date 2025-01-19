// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const typed = new Typed('.typing', {
        strings: ['DevOps Engineer', 'Cloud Engineer', 'SRE Engineer', 'Kubernetes Expert'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add/remove background and shadow based on scroll position
        if (currentScroll > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Animate skill bars when they come into view
                if (entry.target.classList.contains('skills-content')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe all sections and skill cards
    document.querySelectorAll('section, .skill-card').forEach(element => {
        observer.observe(element);
    });

    // Progress bar animation for skills
    function animateSkillBars() {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Theme toggle functionality
    const createThemeToggle = () => {
        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('theme-toggle');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = toggleBtn.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    };
    createThemeToggle();

    // Mobile menu toggle
    const createMobileMenu = () => {
        const menuBtn = document.createElement('button');
        menuBtn.classList.add('menu-toggle');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('.navbar .max-width').appendChild(menuBtn);

        menuBtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('active');
            menuBtn.querySelector('i').classList.toggle('fa-times');
        });
    };
    createMobileMenu();

    // Add scroll percentage indicator
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.classList.add('scroll-indicator');
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            indicator.style.width = scrolled + '%';
        });
    };
    createScrollIndicator();

    // Add back to top button with smooth animation
    const createBackToTop = () => {
        const backToTop = document.createElement('button');
        backToTop.classList.add('back-to-top');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    createBackToTop();
});

// Add preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-finish');
    }
});
