// Theme Toggle Functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('.theme-icon');
        if (theme === 'dark') {
            icon.textContent = '☀️';
            themeBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
            icon.textContent = '🌙';
            themeBtn.setAttribute('title', 'Switch to Dark Mode');
        }
    }
}

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    
    html.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

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

// Function to toggle research boxes
function toggleResearchBox(contentId) {
    const content = document.getElementById(contentId);
    const toggle = event.target;
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        toggle.setAttribute('aria-expanded', 'true');
        toggle.classList.add('expanded');
    } else {
        content.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('expanded');
    }
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Initialize all abstracts as hidden
    const abstracts = document.querySelectorAll('.abstract-content');
    abstracts.forEach(abstract => {
        abstract.style.display = 'none';
    });
    
    // Initialize all research toggle content as hidden
    const toggleContents = document.querySelectorAll('.toggle-content');
    toggleContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Set initial aria-expanded state for toggle buttons
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(button => {
        button.setAttribute('aria-expanded', 'false');
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
        background: var(--nav-bg);
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