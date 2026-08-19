/* ==========================================================================
   GAJAR HALWA — WEDDING SOCIALS
   Interactive & Editorial Scripts
   Designed & Developed by Vicky Prasad Mahato (https://abvicky.in)
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

  // 4. Interactive Inquiry Form Handler (Homepage Contact)
  const inquiryForm = document.getElementById('wedding-inquiry-form');
  const formSuccess = document.getElementById('form-success-message');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('couple-name')?.value.trim() || 'Friend';
      const phone = document.getElementById('contact-phone')?.value.trim() || '';
      const date = document.getElementById('wedding-date')?.value || 'Upcoming date';
      const city = document.getElementById('wedding-city')?.value.trim() || 'India';
      const packageChosen = document.getElementById('preferred-package')?.value || 'Custom';
      
      // WhatsApp message formatting
      const message = `Namaste Gajar Halwa! We are ${name} (Ph: ${phone}). Planning our wedding celebration on ${date} in ${city}. Interested in ${packageChosen}. Let's make it worth remembering!`;
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/916289831240?text=${encodedMsg}`;

      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.innerHTML = `
          <div style="font-size:1.2rem; font-family: var(--font-display-folk); margin-bottom: 0.5rem;">🎉 CELEBRATION RECEIVED!</div>
          <p style="font-size:0.95rem; margin-bottom: 1rem;">Thank you, ${name}! We are checking date availability for ${date}.</p>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:0.75rem 1.4rem; background:var(--deep-red); color:var(--warm-cream); font-weight:800; font-size:0.85rem; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; border:2px solid var(--deep-red); box-shadow: 4px 4px 0px var(--bright-orange);">
            Chat on WhatsApp Now →
          </a>
        `;
        inquiryForm.reset();
      }
    });
  }

  // 5. Gated Package Pricing & Unlock Manager (packages.html)
  const unlockModal = document.getElementById('unlock-pricing-modal');
  const unlockForm = document.getElementById('unlock-pricing-form');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const unlockedBanner = document.getElementById('pricing-unlocked-banner');
  const unlockedInfoSpan = document.getElementById('unlocked-event-info');
  const changeDateBtn = document.getElementById('btn-change-date');
  const unlockTargetPackageInput = document.getElementById('unlock-target-package');

  function openUnlockModal(targetPackage = '') {
    if (!unlockModal) return;
    if (unlockTargetPackageInput) {
      unlockTargetPackageInput.value = targetPackage;
    }
    // Pre-fill existing user info if available
    const savedName = localStorage.getItem('gh_client_name') || '';
    const savedPhone = localStorage.getItem('gh_client_phone') || '';
    const savedDate = localStorage.getItem('gh_client_date') || '';
    const savedCity = localStorage.getItem('gh_client_city') || '';

    const nameInput = document.getElementById('unlock-couple-name');
    const phoneInput = document.getElementById('unlock-phone');
    const dateInput = document.getElementById('unlock-event-date');
    const cityInput = document.getElementById('unlock-city');

    if (nameInput && savedName) nameInput.value = savedName;
    if (phoneInput && savedPhone) phoneInput.value = savedPhone;
    if (dateInput && savedDate) dateInput.value = savedDate;
    if (cityInput && savedCity) cityInput.value = savedCity;

    unlockModal.style.display = 'flex';
    unlockModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeUnlockModal() {
    if (!unlockModal) return;
    unlockModal.style.display = 'none';
    unlockModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function revealAllPricing(userData) {
    const { name, phone, date, city } = userData;

    // Show unlocked banner
    if (unlockedBanner && unlockedInfoSpan) {
      unlockedBanner.style.display = 'flex';
      unlockedInfoSpan.innerHTML = `<strong>${date}</strong> (${city || 'India'}) • Couple: <strong>${name}</strong>`;
    }

    // Reveal price tags on all 3 packages
    document.querySelectorAll('.price-locked-view').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.price-revealed-view').forEach(el => el.style.display = 'flex');

    // Reveal add-on price tags
    document.querySelectorAll('.addon-price-locked').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.addon-price-revealed').forEach(el => el.style.display = 'block');

    // Switch action buttons from Unlock to Direct WhatsApp Booking
    document.querySelectorAll('.action-btn-locked').forEach(el => el.style.display = 'none');
    
    // Package 1: The Halwa Bite (Silver)
    const btn1 = document.getElementById('btn-book-1');
    if (btn1) {
      btn1.style.display = 'inline-flex';
      const msg1 = `Namaste Gajar Halwa! We are ${name} (Ph: ${phone}). Planning our wedding on ${date} in ${city || 'India'}. We want to book Collection 01: THE HALWA BITE (₹11,001 + GST). Please share availability!`;
      btn1.href = `https://wa.me/916289831240?text=${encodeURIComponent(msg1)}`;
    }

    // Package 2: The Kesariya Jalebi (Gold)
    const btn2 = document.getElementById('btn-book-2');
    if (btn2) {
      btn2.style.display = 'inline-flex';
      const msg2 = `Namaste Gajar Halwa! We are ${name} (Ph: ${phone}). Planning our wedding on ${date} in ${city || 'India'}. We want to book Collection 02: THE KESARIYA JALEBI (₹21,001 + GST). Please share availability!`;
      btn2.href = `https://wa.me/916289831240?text=${encodeURIComponent(msg2)}`;
    }

    // Package 3: The Shahi Tukda (Platinum)
    const btn3 = document.getElementById('btn-book-3');
    if (btn3) {
      btn3.style.display = 'inline-flex';
      const msg3 = `Namaste Gajar Halwa! We are ${name} (Ph: ${phone}). Planning our wedding on ${date} in ${city || 'India'}. We want to book Collection 03: THE SHAHI TUKDA (₹51,001 + GST). Please share availability!`;
      btn3.href = `https://wa.me/916289831240?text=${encodeURIComponent(msg3)}`;
    }
  }

  // Attach event listeners to all Unlock trigger buttons
  document.querySelectorAll('.btn-trigger-unlock').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPkg = btn.getAttribute('data-package') || '';
      openUnlockModal(targetPkg);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeUnlockModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeUnlockModal);
  if (changeDateBtn) changeDateBtn.addEventListener('click', () => openUnlockModal());

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && unlockModal && unlockModal.style.display === 'flex') {
      closeUnlockModal();
    }
  });

  // Handle Unlock Form Submit
  if (unlockForm) {
    unlockForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('unlock-couple-name')?.value.trim();
      const phone = document.getElementById('unlock-phone')?.value.trim();
      const date = document.getElementById('unlock-event-date')?.value;
      const city = document.getElementById('unlock-city')?.value.trim() || 'India';
      const targetPackage = document.getElementById('unlock-target-package')?.value || '';

      if (!name || !phone || !date) {
        alert('Please fill in your Name, Event Date, and Phone number to unlock package charges.');
        return;
      }

      // Save lead information
      localStorage.setItem('gh_pricing_unlocked', 'true');
      localStorage.setItem('gh_client_name', name);
      localStorage.setItem('gh_client_phone', phone);
      localStorage.setItem('gh_client_date', date);
      localStorage.setItem('gh_client_city', city);

      // Reveal all pricing
      revealAllPricing({ name, phone, date, city });
      closeUnlockModal();

      // Scroll smoothly to target package if specified
      if (targetPackage.includes('Halwa Bite') || targetPackage.includes('Silver')) {
        document.getElementById('halwa-bite')?.scrollIntoView({ behavior: 'smooth' });
      } else if (targetPackage.includes('Kesariya') || targetPackage.includes('Gold')) {
        document.getElementById('kesariya-jalebi')?.scrollIntoView({ behavior: 'smooth' });
      } else if (targetPackage.includes('Shahi') || targetPackage.includes('Platinum')) {
        document.getElementById('shahi-tukda')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        unlockedBanner?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Check if pricing was already unlocked in this browser
  if (localStorage.getItem('gh_pricing_unlocked') === 'true') {
    const savedData = {
      name: localStorage.getItem('gh_client_name') || 'Valued Guest',
      phone: localStorage.getItem('gh_client_phone') || '',
      date: localStorage.getItem('gh_client_date') || 'Upcoming Date',
      city: localStorage.getItem('gh_client_city') || 'India'
    };
    revealAllPricing(savedData);
  }

  // 6. Intersection Observer for Subtle Reveals
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

  // 7. Video Audio / Sound Toggle Handler
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
