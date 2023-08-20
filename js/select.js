// Mobile menu
const mobileMenuToggleButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('navbar-dropdown');

mobileMenuToggleButton.addEventListener('click', () => {
  const isMenuOpen = mobileMenu.classList.toggle('hidden');
  if (isMenuOpen) {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuToggleButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
});
