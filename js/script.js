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





document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const headerHeight = document.querySelector('header').offsetHeight; // ヘッダーの高さを取得
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    // メニューをクリックしたら閉じる（スマホ用）
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  
    // スムーススクロール & スクロール位置調整
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const targetPosition = targetSection.offsetTop - headerHeight; // ヘッダー分を引く
  
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  