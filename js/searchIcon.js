const searchIcon = document.getElementById('searchIcon');
const searchInput = searchIcon.querySelector('input');
const searchSVG = searchIcon.querySelector('#search');
const closeSVG = searchIcon.querySelector('#cross');

closeSVG.addEventListener('click', () => {
  searchInput.classList.add('hidden'); // Hide the input field
  searchInput.value = ''; // Clear the input value
  searchSVG.classList.remove('hidden'); // Show the search icon
  closeSVG.classList.add('hidden'); // Hide the close icon
});

searchSVG.addEventListener('click', () => {
  searchInput.classList.remove('hidden'); // Show the input field
  searchSVG.classList.add('hidden'); // Hide the search icon
  closeSVG.classList.remove('hidden'); // Show the close icon
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    // Perform the search operation here with searchInput.value
    // After the search, clear the input and toggle the icons
    searchInput.value = '';
    closeSVG.classList.add('hidden');
    searchSVG.classList.remove('hidden');
    searchInput.classList.add('hidden');
  }
});

closeSVG.addEventListener('click', () => {
  searchInput.value = '';
  closeSVG.classList.add('hidden');
  searchSVG.classList.remove('hidden');
  searchInput.classList.add('hidden');
});


