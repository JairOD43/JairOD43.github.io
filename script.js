document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjusted offset for better alignment
          behavior: 'smooth'
        });
      });
    });

    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLi.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.7 
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    const navLinks = document.querySelectorAll('.navbar-collapse a.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });
  });
  