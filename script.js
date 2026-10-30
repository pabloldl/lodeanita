'use strict';
// Content remains visible if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.about-copy, .everyday-layout, .neighborhood-layout, .visit-layout').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
