const phases = [
  { label: "Phase 0", title: "Build the launchpad", moon: "🌑", text: "Create the website, program email, social page, interest list, and simple impact tracker.", next: "Next stop →" },
  { label: "Phase 1", title: "Finish the program kit", moon: "🌒", text: "Package six tested lessons with slides, materials, worksheets, discussion prompts, and leader guides.", next: "Next stop →" },
  { label: "Phase 2", title: "Train the crew", moon: "🌓", text: "Recruit 10–20 high-school volunteers and prepare them to lead joyful, safe, inquiry-based sessions.", next: "Next stop →" },
  { label: "Phase 3", title: "Launch locally", moon: "🌔", text: "Run workshops with schools, libraries, and camps; collect student reflections and host feedback.", next: "Next stop →" },
  { label: "Phase 4", title: "Grow the galaxy", moon: "🌕", text: "Add directors for curriculum, volunteers, outreach, events, and media—then expand to 3 schools in Year 2 and 5+ in Year 3.", next: "Destination: 5+ partner schools" }
];

const menuButton = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
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

const card = document.querySelector(".phase-card");
document.querySelectorAll(".phase-tabs button").forEach(button => button.addEventListener("click", () => {
  const phase = phases[Number(button.dataset.phase)];
  document.querySelectorAll(".phase-tabs button").forEach(item => item.classList.toggle("active", item === button));
  card.querySelector(".phase-moon").textContent = phase.moon;
  card.querySelector(".phase-label").textContent = phase.label;
  card.querySelector("h3").textContent = phase.title;
  card.querySelector(".phase-text").textContent = phase.text;
  card.querySelector(".phase-next").textContent = phase.next;
}));
