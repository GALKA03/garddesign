const expandButton = document.getElementById('expandButton');
const gradientOverlay = document.getElementById('gradient-overlay');

// Get references to the images with pointer-events-none class
const images = document.querySelectorAll('.pointer-events-none img');

// Track the state of the images
let imagesDisabled = false;

// Add click event listener to the button
expandButton.addEventListener('click', () => {
  console.log('Button clicked');

  // Toggle the visibility of the gradient overlay
  gradientOverlay.style.display = gradientOverlay.style.display === 'none' ? 'block' : 'none';

  // Toggle the pointer-events-none class on images
  images.forEach(image => {
    if (imagesDisabled) {
      image.parentElement.classList.add('pointer-events-none');
    } else {
      image.parentElement.classList.remove('pointer-events-none');
    }
  });

  // Toggle the state of the images
  imagesDisabled = !imagesDisabled;
});
