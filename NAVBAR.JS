// ===== STANDALONE NAVBAR JS =====
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("nav");

  if (!btn || !nav) {
    console.error("Navbar not found");
    return;
  }

  btn.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = btn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});
