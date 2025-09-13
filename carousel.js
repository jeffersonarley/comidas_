// carousel.js
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.carousel-controls .prev');
const nextBtn = document.querySelector('.carousel-controls .next');
let idx = 0;

function showTestimonial(i) {
  testimonials.forEach((t, j) => t.classList.toggle('active', j === i));
}
showTestimonial(idx);

prevBtn.addEventListener('click', () => {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  showTestimonial(idx);
});
nextBtn.addEventListener('click', () => {
  idx = (idx + 1) % testimonials.length;
  showTestimonial(idx);
});

// Auto-rotate
setInterval(() => {
  idx = (idx + 1) % testimonials.length;
  showTestimonial(idx);
}, 6000);
