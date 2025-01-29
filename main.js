const navToggle = document.querySelector(
  '[aria-controls="primary-navigation"]',
);
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const navOpened = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", !navOpened);
});
