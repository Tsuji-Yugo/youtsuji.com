document.addEventListener('DOMContentLoaded', () => {
  // スクロールアニメーション
  const sections = document.querySelectorAll('section');
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  // ヘッダーの背景色変更
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      } else {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      }
      lastScrollTop = scrollTop;
  });

  // パララックス効果
  const parallaxSections = document.querySelectorAll('.parallax-section');
  parallaxSections.forEach(section => {
      const img = section.style.backgroundImage;
      window.addEventListener('scroll', () => {
          const scrollPosition = window.pageYOffset;
          section.style.backgroundPosition = `50% ${scrollPosition * 0.5}px`;
      });
  });
});