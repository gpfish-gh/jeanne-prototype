/* ========================================
   Jeanné — Shared Interactivity
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // ---- Goal Card Selection (onboarding-goals.html) ----
  document.querySelectorAll('[data-goal-card]').forEach(card => {
    card.addEventListener('click', () => {
      // Deselect all
      document.querySelectorAll('[data-goal-card]').forEach(c => {
        c.classList.remove('ring-2', 'ring-[#D4A053]', 'bg-[#FDF8F0]');
        const check = c.querySelector('[data-check]');
        if (check) check.classList.add('hidden');
      });
      // Select clicked
      card.classList.add('ring-2', 'ring-[#D4A053]', 'bg-[#FDF8F0]');
      const check = card.querySelector('[data-check]');
      if (check) check.classList.remove('hidden');
    });
  });

  // ---- Activity Level Segmented Control (onboarding-profile.html) ----
  document.querySelectorAll('[data-activity-option]').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('[data-activity-option]').forEach(o => {
        o.classList.remove('bg-[#D4A053]', 'text-white', 'font-semibold');
        o.classList.add('bg-white', 'text-[#6B6B6B]');
      });
      option.classList.remove('bg-white', 'text-[#6B6B6B]');
      option.classList.add('bg-[#D4A053]', 'text-white', 'font-semibold');
    });
  });

  // ---- Dietary Preference Chips (onboarding-profile.html) ----
  document.querySelectorAll('[data-diet-chip]').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('bg-[#F5F2FC]');
      chip.classList.toggle('border-[#9B7FD4]');
      chip.classList.toggle('text-[#8266C4]');
      chip.classList.toggle('bg-white');
      chip.classList.toggle('border-[#E8E5DF]');
      chip.classList.toggle('text-[#6B6B6B]');
    });
  });

  // ---- Device Connect Toggle (onboarding-devices.html) ----
  document.querySelectorAll('[data-connect-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const isConnected = btn.dataset.connected === 'true';
      if (!isConnected) {
        btn.dataset.connected = 'true';
        btn.textContent = 'Connected';
        btn.classList.remove('bg-[#D4A053]', 'text-white');
        btn.classList.add('bg-[#ECFDF5]', 'text-[#059669]');
        // Add green dot to parent card
        const dot = btn.closest('[data-device-card]')?.querySelector('[data-status-dot]');
        if (dot) {
          dot.classList.remove('bg-[#E8E5DF]');
          dot.classList.add('bg-[#34D399]');
        }
      }
    });
  });

  // ---- Supplement Check-off (dashboard.html) ----
  document.querySelectorAll('[data-supplement]').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('supplement-checked');
      const check = item.querySelector('[data-supp-check]');
      if (check) {
        check.classList.toggle('bg-[#34D399]');
        check.classList.toggle('border-[#34D399]');
        check.classList.toggle('bg-white');
        check.classList.toggle('border-[#E8E5DF]');
        const icon = check.querySelector('[data-supp-check-icon]');
        if (icon) icon.classList.toggle('hidden');
      }
    });
  });

  // ---- Quick Action Chips (coach.html) ----
  document.querySelectorAll('[data-quick-chip]').forEach(chip => {
    chip.addEventListener('click', () => {
      const chatArea = document.querySelector('[data-chat-area]');
      const input = document.querySelector('[data-chat-input]');
      if (input) {
        input.value = chip.textContent.trim();
        input.focus();
      }
    });
  });

  // ---- Meal Swap Button (meals.html) ----
  document.querySelectorAll('[data-swap-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.add('animate-spin');
      setTimeout(() => {
        btn.classList.remove('animate-spin');
      }, 500);
    });
  });
});
