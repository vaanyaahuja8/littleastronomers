const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.textContent = open ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
