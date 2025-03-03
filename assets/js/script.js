


// Navbar text change


// header
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// counter


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  function startCount(counter) {
      const target = parseInt(counter.dataset.target);
      const duration = 10000;
      const increment = target / (duration / 32); // 60fps
      let current = 0;

      const updateCounter = () => {
          current += increment;
          if (current < target) {
              counter.textContent = Math.ceil(current);
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target;
          }
      };

      counter.textContent = '0';
      updateCounter();
  }

  // Create Intersection Observer
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const countersSection = entry.target;
              const counters = countersSection.querySelectorAll('.counter');
              counters.forEach(counter => {
                  startCount(counter);
              });
          } else {
              // Reset counters when out of view
              const counters = entry.target.querySelectorAll('.counter');
              counters.forEach(counter => {
                  counter.textContent = '0';
              });
          }
      });
  }, options);

  // Observe the counter section
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) {
      observer.observe(counterSection);
  }
});

// back to top

document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Smooth scroll to top with Lenis
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.5 });
    });
});





