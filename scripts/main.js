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

  // 5. Gated Package Pricing & Single Package Unlock Manager (packages.html)
  const unlockModal = document.getElementById('unlock-pricing-modal');
  const unlockForm = document.getElementById('unlock-pricing-form');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalPackageNameEl = document.getElementById('modal-package-name');
  const unlockedBanner = document.getElementById('pricing-unlocked-banner');
  const unlockedInfoSpan = document.getElementById('unlocked-event-info');
  const changeDateBtn = document.getElementById('btn-change-date');
  const unlockTargetPackageInput = document.getElementById('unlock-target-package');

  // Package registry mapping
  const packageMeta = {
    'halwa-bite': {
      index: 1,
      name: 'The Halwa Bite (Silver)',
      price: '₹11,001 + GST',
      sectionId: 'halwa-bite'
    },
    'kesariya-jalebi': {
      index: 2,
      name: 'The Kesariya Jalebi (Gold)',
      price: '₹21,001 + GST',
      sectionId: 'kesariya-jalebi'
    },
    'shahi-tukda': {
      index: 3,
      name: 'The Shahi Tukda (Platinum)',
      price: '₹51,001 + GST',
      sectionId: 'shahi-tukda'
    }
  };

  function getUnlockedPackages() {
    try {
      const saved = localStorage.getItem('gh_unlocked_packages');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function saveUnlockedPackage(pkgKey) {
    const list = getUnlockedPackages();
    if (!list.includes(pkgKey)) {
      list.push(pkgKey);
      localStorage.setItem('gh_unlocked_packages', JSON.stringify(list));
    }
  }

  function openUnlockModal(targetPackage = '', targetPackageName = '') {
    if (!unlockModal) return;
    if (unlockTargetPackageInput) {
      unlockTargetPackageInput.value = targetPackage;
    }
    if (modalPackageNameEl) {
      modalPackageNameEl.textContent = targetPackageName || (packageMeta[targetPackage]?.name || 'Selected Collection');
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

  function unlockSinglePackage(pkgKey, userData) {
    const meta = packageMeta[pkgKey];
    if (!meta) return;

    const { name, phone, date, city } = userData;
    const idx = meta.index;

    // Reveal specific price view & hide locked view for this package only
    const priceLocked = document.getElementById(`price-locked-${idx}`);
    const priceRevealed = document.getElementById(`price-revealed-${idx}`);
    if (priceLocked) priceLocked.style.display = 'none';
    if (priceRevealed) priceRevealed.style.display = 'flex';

    // Switch action button to WhatsApp booking for this package only
    const actionLock = document.getElementById(`action-lock-${idx}`);
    const actionBook = document.getElementById(`btn-book-${idx}`);
    if (actionLock) actionLock.style.display = 'none';
    if (actionBook) {
      actionBook.style.display = 'inline-flex';
      const msg = `Namaste Gajar Halwa! We are ${name} (Ph: ${phone}). Planning our wedding on ${date} in ${city || 'India'}. We want to book Collection 0${idx}: ${meta.name} (${meta.price}). Please share availability!`;
      actionBook.href = `https://wa.me/916289831240?text=${encodeURIComponent(msg)}`;
    }

    // Update banner
    const unlockedList = getUnlockedPackages();
    if (unlockedBanner && unlockedInfoSpan) {
      unlockedBanner.style.display = 'flex';
      const unlockedNames = unlockedList.map(k => packageMeta[k]?.name || k).join(', ');
      unlockedInfoSpan.innerHTML = `<strong>${date}</strong> (${city || 'India'}) • Unlocked: <strong>${unlockedNames || meta.name}</strong>`;
    }
  }

  // Attach event listeners to all Unlock trigger buttons
  document.querySelectorAll('.btn-trigger-unlock').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPkg = btn.getAttribute('data-package') || '';
      const targetName = btn.getAttribute('data-package-name') || '';
      openUnlockModal(targetPkg, targetName);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeUnlockModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeUnlockModal);
  if (changeDateBtn) changeDateBtn.addEventListener('click', () => {
    const list = getUnlockedPackages();
    openUnlockModal(list[0] || 'halwa-bite', packageMeta[list[0]]?.name || '');
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && unlockModal && unlockModal.style.display === 'flex') {
      closeUnlockModal();
    }
  });

  // Handle Unlock Form Submit (Unlocks ONLY the requested package)
  if (unlockForm) {
    unlockForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('unlock-couple-name')?.value.trim();
      const phone = document.getElementById('unlock-phone')?.value.trim();
      const date = document.getElementById('unlock-event-date')?.value;
      const city = document.getElementById('unlock-city')?.value.trim() || 'India';
      let targetPackage = document.getElementById('unlock-target-package')?.value || 'halwa-bite';

      if (!name || !phone || !date) {
        alert('Please fill in your Name, Event Date, and Phone number to view package charges.');
        return;
      }

      // Save user lead information
      localStorage.setItem('gh_client_name', name);
      localStorage.setItem('gh_client_phone', phone);
      localStorage.setItem('gh_client_date', date);
      localStorage.setItem('gh_client_city', city);

      // Save and unlock ONLY this specific package
      saveUnlockedPackage(targetPackage);
      unlockSinglePackage(targetPackage, { name, phone, date, city });
      closeUnlockModal();

      // Smoothly scroll to the unlocked package section
      const sectionId = packageMeta[targetPackage]?.sectionId;
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Restore previously unlocked packages for returning user
  const savedUnlocked = getUnlockedPackages();
  if (savedUnlocked.length > 0) {
    const savedData = {
      name: localStorage.getItem('gh_client_name') || 'Valued Guest',
      phone: localStorage.getItem('gh_client_phone') || '',
      date: localStorage.getItem('gh_client_date') || 'Upcoming Date',
      city: localStorage.getItem('gh_client_city') || 'India'
    };
    savedUnlocked.forEach(pkgKey => {
      unlockSinglePackage(pkgKey, savedData);
    });
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
