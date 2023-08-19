

function toggleImages() {
  const gallery = document.querySelector('[data-te-lightbox-init]');
  const gradient = document.querySelector('#gradient-overlay'); // Corrected selector

  if (gallery.style.display === 'none') {
    gallery.style.display = 'grid';
    gradient.style.display = 'block';
  } else {
    gallery.style.display = 'none';
    gradient.style.display = 'none';
  }
}

function revealImages() {
  const gradientOverlay = document.querySelector('#gradient-overlay'); // Corrected selector
  gradientOverlay.style.display = 'none';
}