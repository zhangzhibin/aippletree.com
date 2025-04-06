/**
 * Interactive components functionality
 * Handles filtering, search, and back-to-top button
 */

document.addEventListener('DOMContentLoaded', function() {
  // Tag filtering
  const filterButtons = document.querySelectorAll('.filter-button');
  const filterItems = document.querySelectorAll('.filter-item');
  
  if (filterButtons.length && filterItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.dataset.filter;
        
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter items
        filterItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', debounce(function() {
      const query = this.value.toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }
      
      // Perform search (this would typically be an API call)
      // For now, we'll just filter the items on the page
      const items = document.querySelectorAll('.searchable-item');
      const results = Array.from(items).filter(item => {
        const text = item.textContent.toLowerCase();
        return text.includes(query);
      });
      
      // Display results
      if (results.length) {
        searchResults.innerHTML = results.map(item => `
          <a href="${item.dataset.url}" class="search-result-item">
            <h4>${item.dataset.title}</h4>
            <p>${item.dataset.description}</p>
          </a>
        `).join('');
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = '<p class="no-results">No results found</p>';
        searchResults.style.display = 'block';
      }
    }, 300));
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
  
  // Back to top button
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '&uarr;';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
}); 