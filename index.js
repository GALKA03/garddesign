// Dropdown menu
const dropdownToggleButton = document.querySelector('[data-dropdown-toggle="dropdownNavbar"]');
const dropdownMenu = document.querySelector("#dropdownNavbar");

dropdownToggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !dropdownToggleButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.add("hidden");
  }
});

// Mobile menu
const mobileMenuToggleButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('navbar-dropdown'); // Replace with the correct ID

mobileMenuToggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
