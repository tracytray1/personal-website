const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

function myFunction() {
  alert("The form was submitted");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeIn');
      entry.target.style.opacity = 1; // Ensure visibility
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with animate__animated class
  const animatedElements = document.querySelectorAll('.animate__animated');
  animatedElements.forEach(element => {
    element.style.opacity = 0; // Start hidden for effect
    observer.observe(element);
  });
});
