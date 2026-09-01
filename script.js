// Highlight active nav item on scroll
  const sections = document.querySelectorAll('section.topic');
  const navLinks = document.querySelectorAll('#navlist a');
  const map = {};
  navLinks.forEach(a => map[a.getAttribute('href').slice(1)] = a);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = map[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));