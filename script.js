/* ==============================
   NEXORA AI - MAIN JAVASCRIPT
   ============================== */

/* ---------- INTRO SEQUENCE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const introLogo = document.getElementById("intro-logo");
  const introName = document.getElementById("intro-name");

  // Safety check
  if (!introLogo || !introName) return;

  /*
    FLOW:
    1. Logo visible (glow)
    2. Logo fade out
    3. Brand name appear
    4. Brand name fade out
    5. Website visible
  */

  // Step 1: Logo stays visible
  setTimeout(() => {
    introLogo.style.opacity = "0";
    introLogo.style.transform = "scale(0.95)";
  }, 2200);

  // Step 2: Switch to brand name
  setTimeout(() => {
    introLogo.style.display = "none";
    introName.style.opacity = "1";
  }, 3000);

  // Step 3: Fade out brand name
  setTimeout(() => {
    introName.style.opacity = "0";
  }, 4600);

  // Step 4: Remove intro completely
  setTimeout(() => {
    introName.style.display = "none";
  }, 5200);
});


/* ---------- SMOOTH SCROLL NAVIGATION ---------- */
(() => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
})();


/* ---------- NAVBAR SCROLL EFFECT ---------- */
(() => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = "0 10px 30px rgba(77,163,255,0.25)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
})();


/* ---------- CTA BUTTON MICRO INTERACTION ---------- */
(() => {
  const buttons = document.querySelectorAll(".cta-button");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-6px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
    });
  });
})();


/* ---------- SOCIAL FLOAT BUTTON EFFECT ---------- */
(() => {
  const socialButtons = document.querySelectorAll(".social-btn");

  socialButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.15)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
})();