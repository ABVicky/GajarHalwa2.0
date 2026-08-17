/* ==========================================================================
   GAJAR HALWA — WEDDING SOCIALS
   Interactive & Editorial Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link, .mobile-nav .nav-cta');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Auto-Select Package from URL Parameter or Hash
  const urlParams = new URLSearchParams(window.location.search);
  const packageParam = urlParams.get('package');
  const packageSelect = document.getElementById('preferred-package');
  if (packageParam && packageSelect) {
    let matched = false;
    for (let i = 0; i < packageSelect.options.length; i++) {
      const optVal = packageSelect.options[i].value.toLowerCase();
      const searchVal = packageParam.toLowerCase();
      if (optVal.includes(searchVal) || searchVal.includes(optVal.split(' ')[1] || '')) {
        packageSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      packageSelect.value = packageParam;
    }
  }

  // 4. Interactive Inquiry Form Handler
  const inquiryForm = document.getElementById('wedding-inquiry-form');
  const formSuccess = document.getElementById('form-success-message');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('couple-name')?.value || 'Friend';
      const date = document.getElementById('wedding-date')?.value || 'Upcoming date';
      const city = document.getElementById('wedding-city')?.value || 'India';
      const packageChosen = document.getElementById('preferred-package')?.value || 'Custom';
      
      // WhatsApp message formatting
      const message = `Namaste Gajar Halwa! We are ${name}. Planning our wedding celebration on ${date} in ${city}. Interested in ${packageChosen}. Let's make it worth remembering!`;
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/916289831240?text=${encodedMsg}`;

      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.innerHTML = `
          <div style="font-size:1.2rem; font-family: var(--font-display-folk); margin-bottom: 0.5rem;">🎉 CELEBRATION RECEIVED!</div>
          <p style="font-size:0.95rem; margin-bottom: 1rem;">Thank you, ${name}. We are looking into your date (${date}).</p>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:0.6rem 1.2rem; background:var(--deep-red); color:var(--warm-cream); font-weight:800; font-size:0.8rem; letter-spacing:0.1em; text-transform:uppercase; text-decoration:none; border:2px solid var(--deep-red);">
            Instant WhatsApp Connect →
          </a>
        `;
        inquiryForm.reset();
      }
    });
  }

  // 5. Intersection Observer for Subtle Reveals
  const revealElements = document.querySelectorAll('.art-card, .wwd-pillar, .work-piece-cinematic, .work-piece-pink-accent, .package-editorial-block');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => {
      el.style.opacity = '0.92';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      revealObserver.observe(el);
    });
  }

  // 6. Video Audio / Sound Toggle Handler
  const heroVideo = document.getElementById('hero-video-player');
  const soundToggleBtn = document.getElementById('hero-sound-toggle');
  if (heroVideo && soundToggleBtn) {
    const mutedIcon = soundToggleBtn.querySelector('.sound-muted');
    const unmutedIcon = soundToggleBtn.querySelector('.sound-unmuted');

    soundToggleBtn.addEventListener('click', () => {
      heroVideo.muted = !heroVideo.muted;
      if (heroVideo.muted) {
        if (mutedIcon) mutedIcon.style.display = 'inline';
        if (unmutedIcon) unmutedIcon.style.display = 'none';
      } else {
        if (mutedIcon) mutedIcon.style.display = 'none';
        if (unmutedIcon) unmutedIcon.style.display = 'inline';
      }
    });
  }
});
