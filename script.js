const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -15% 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  revealObserver.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: offset, behavior: "smooth" });
  });
});

const waitlistForm = document.getElementById("waitlistForm");
const emailInput = document.getElementById("emailInput");
const successMessage = document.getElementById("successMessage");

if (waitlistForm && emailInput && successMessage) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      emailInput.classList.add("invalid");
      return;
    }

    emailInput.classList.remove("invalid");
    waitlistForm.classList.add("submitted");
    successMessage.classList.add("visible");

    try {
      localStorage.setItem("reflect_waitlist_email", email);
    } catch (_) {}

    if (typeof gtag === "function") {
      gtag("event", "waitlist_signup", {
        event_category: "engagement",
        event_label: "email_submitted",
      });
    }
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ambientCircles = document.querySelectorAll(".ambient-circle");
let ambientTicking = false;

function updateAmbient() {
  const scrollY = window.scrollY;
  ambientCircles.forEach((circle, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    const intensity = 0.04 + index * 0.01;
    circle.style.transform = `translate(${scrollY * intensity * direction}px, ${
      scrollY * intensity * 1.2 * direction
    }px) scale(1)`;
  });
  ambientTicking = false;
}

window.addEventListener("scroll", () => {
  if (!ambientTicking) {
    window.requestAnimationFrame(updateAmbient);
    ambientTicking = true;
  }
});

const interactiveCards = document.querySelectorAll(
  ".identity-grid article, .feel-grid article, .cta-card"
);

interactiveCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    document.body.classList.add("keyboard-nav");
  }
});

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-nav");
});
