// index.js

document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.querySelector("#searchIcon input");
  const searchImg = document.querySelector("#search");
  const crossImg = document.querySelector("#cross");

  searchIcon.addEventListener("click", function (event) {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    
    searchInput.classList.toggle("hidden");
    searchImg.classList.toggle("hidden");
    crossImg.classList.toggle("hidden");
    
    if (!searchInput.classList.contains("hidden")) {
      searchInput.focus();
    } else {
      searchInput.value = ""; // Clear the input
    }
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Perform search or any action you want on Enter key press
      console.log("Search triggered:", searchInput.value);
      searchInput.value = ""; // Clear the input after search
    }
  });

  searchInput.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click on input from closing the input
  });

  crossImg.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click on cross from closing the input
    searchInput.value = ""; // Clear the input
    searchInput.classList.add("hidden");
    searchImg.classList.remove("hidden");
    crossImg.classList.add("hidden");
  });

  // Close input when clicking outside of input and cross
  document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target) && !crossImg.contains(event.target)) {
      searchInput.value = ""; // Clear the input
      searchInput.classList.add("hidden");
      searchImg.classList.remove("hidden");
      crossImg.classList.add("hidden");
    }
  });
});
