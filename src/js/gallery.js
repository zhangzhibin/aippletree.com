/**
 * Gallery functionality
 * Handles image lightbox, carousel, and lazy loading
 */

document.addEventListener('DOMContentLoaded', function() {
  // Lightbox functionality
  const galleryImages = document.querySelectorAll('.gallery-image');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <button class="lightbox-prev">&lt;</button>
      <button class="lightbox-next">&gt;</button>
      <img src="" alt="" class="lightbox-img">
    </div>
  `;
  document.body.appendChild(lightbox);
  
  let currentImageIndex = 0;
  
  // Open lightbox
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
      currentImageIndex = index;
      openLightbox(img.src, img.alt);
    });
  });
  
  // Close lightbox
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Navigation
  lightbox.querySelector('.lightbox-prev').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  });
  
  lightbox.querySelector('.lightbox-next').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
      } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
      }
    }
  });
  
  function openLightbox(src, alt) {
    lightbox.classList.add('active');
    lightbox.querySelector('.lightbox-img').src = src;
    lightbox.querySelector('.lightbox-img').alt = alt;
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function updateLightboxImage() {
    const img = galleryImages[currentImageIndex];
    lightbox.querySelector('.lightbox-img').src = img.src;
    lightbox.querySelector('.lightbox-img').alt = img.alt;
  }
  
  // Lazy loading
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}); 