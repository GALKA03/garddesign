
// Prevent default behavior of the dropdown button when clicked
const dropdownButton = document.getElementById('dropdownNavbarLink');
const dropdownMenu = document.getElementById('dropdownNavbar');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden'); // Toggle the "hidden" class to show/hide the dropdown
});