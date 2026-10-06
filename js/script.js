// Navbar border appears after scrolling
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section in view
const links = document.querySelectorAll('.nav-links a');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && observer.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
