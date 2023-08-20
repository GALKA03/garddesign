document.addEventListener('DOMContentLoaded', () => {
  // An array of random words for modal content
  const randomWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
    "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", 
  ];
 const modal = document.getElementById('myModal-projects');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalContent = modal.querySelector('#modalContent');
  const closeModal = modal.querySelector('#closeModal');
  const buttons = document.querySelectorAll('.modal-button');
  // Get the "Dowiedz się więcej" button
 function generateRandomContent(wordsArray) {
    const randomContent = [];
    for (let i = 0; i < 100; i++) {
      const randomIndex = Math.floor(Math.random() * wordsArray.length);
      randomContent.push(wordsArray[randomIndex]);
    }
    return randomContent.join(' ');
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('id').replace('button-', 'myModal-');
      const modal = document.getElementById(modalId);
      const modalTitle = modal.querySelector('#modalTitle');
      const modalContent = modal.querySelector('#modalContent');

      const modalContentText = generateRandomContent(randomWords);

      modalTitle.textContent = `Modal Title - ${modalId}`; // Set your modal title here
      modalContent.textContent = modalContentText;
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });
});