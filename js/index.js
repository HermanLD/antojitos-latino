console.log("JS IS CONNECTED!");

const dropdownMobile = document.querySelector("#mobile-dropdown");
const dropdownCtrl = document.querySelector(
  '[aria-controls="mobile-dropdown"]'
);

function toggleDropdown() {
  if (dropdownCtrl.getAttribute("aria-expanded") === "false") {
    dropdownCtrl.setAttribute("aria-expanded", "true");
    dropdownMobile.classList.replace("translate-x-full", "translate-x-0");
  } else {
    dropdownCtrl.setAttribute("aria-expanded", "false");
    dropdownMobile.classList.replace("translate-x-0", "translate-x-full");
  }
}

dropdownCtrl.addEventListener("click", toggleDropdown);
