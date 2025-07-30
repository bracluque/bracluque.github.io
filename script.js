// Function to toggle abstracts
function toggleAbstract(abstractId) {
    const abstract = document.getElementById(abstractId);
    const toggle = event.target;
    
    if (abstract.style.display === 'none' || abstract.style.display === '') {
        abstract.style.display = 'block';
        toggle.textContent = 'Hide Abstract';
    } else {
        abstract.style.display = 'none';
        toggle.textContent = 'Abstract';
    }
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Initialize all abstracts as hidden when page loads
document.addEventListener('DOMContentLoaded', function() {
    const abstracts = document.querySelectorAll('.abstract-content');
    abstracts.forEach(abstract => {
        abstract.style.display = 'none';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navLinks && menuBtn && 
        !navLinks.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

// Smooth scrolling for anchor links (if you add any internal page anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add a "back to top" functionality
function addBackToTopButton() {
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2d3748;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Uncomment the line below if you want the back to top button
// addBackToTopButton();