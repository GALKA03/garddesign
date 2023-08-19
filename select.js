document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
  const dropdownNavbar = document.getElementById("navbar-dropdown");
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const logoImage = document.getElementById('logoImage');
  const header = document.querySelector('.container');

  // Hide the close icon by default
  closeIcon.classList.add("hidden");

  if (dropdownButton && dropdownNavbar) {
    dropdownButton.addEventListener("click", function () {
      dropdownNavbar.classList.toggle("hidden");
      menuIcon.classList.toggle("hidden");
      closeIcon.classList.toggle("hidden");
      logoImage.classList.toggle('hidden'); // Toggle the 'hidden' class on the logo image
      header.classList.toggle('py-8'); // Toggle padding on header
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!dropdownButton.contains(event.target) && !dropdownNavbar.contains(event.target)) {
        dropdownNavbar.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        logoImage.classList.remove('hidden');
        header.classList.remove('py-8');
      }
    });
  }
});
