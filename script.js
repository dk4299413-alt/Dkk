/* =========================================================
   KAVYA & VILAS — INTERACTIONS
   ========================================================= */

const loader = document.getElementById("loader");
const openInvitation = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const topBtn = document.getElementById("topBtn");

// Opening animation
window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 700);
});

openInvitation.addEventListener("click", () => {
  invitation.scrollIntoView({ behavior: "smooth" });
  createPetals(22);
});

// Reveal-on-scroll animation
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach(item => observer.observe(item));

// Floating petals
function createPetals(amount = 12) {
  const layer = document.querySelector(".petal-layer");

  for (let i = 0; i < amount; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    const size = 6 + Math.random() * 8;
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.45}px`;
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.animationDelay = `${Math.random() * 1.5}s`;
    petal.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    petal.style.opacity = `${0.35 + Math.random() * 0.5}`;

    layer.appendChild(petal);
    setTimeout(() => petal.remove(), 11000);
  }
}

// A subtle petal burst after the invitation opens.
setTimeout(() => createPetals(8), 1800);

// Countdown
// Change this date/time to your real engagement date.
const eventDate = new Date("September 13, 2026 10:30:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (distance <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  days.textContent = String(Math.floor(distance / 86400000)).padStart(2, "0");
  hours.textContent = String(Math.floor((distance / 3600000) % 24)).padStart(2, "0");
  minutes.textContent = String(Math.floor((distance / 60000) % 60)).padStart(2, "0");
  seconds.textContent = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Wishes form
// This demo opens WhatsApp with the entered wish.
// Replace the phone number below with the couple/family WhatsApp number.
const WHATSAPP_NUMBER = "9195515 55093";

document.getElementById("wishForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const message = document.getElementById("wishMessage").value.trim();
  const status = document.getElementById("wishStatus");

  if (!name || !message) return;

  const text =
    `Engagement Wishes for Monalisa ❤️ & Ramachandran❤️
    %0A%0A` +
    `From: ${encodeURIComponent(name)}%0A` +
    `Message: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

  status.textContent = "Your wishes are ready to send on WhatsApp. ♥";
  event.target.reset();
});

// Back to top
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 650);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
