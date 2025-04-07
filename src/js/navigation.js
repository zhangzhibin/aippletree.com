/**
 * Navigation functionality
 * Handles mobile menu, scroll behavior, and active state
 */

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navToggle && navMenu && 
        !navToggle.contains(event.target) && 
        !navMenu.contains(event.target) && 
        navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
  
  // Scroll behavior
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove sticky class based on scroll position
    if (scrollTop > 100) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
    
    // Hide/show nav based on scroll direction
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Active state for current page
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}); 