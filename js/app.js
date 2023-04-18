// Get the button element by class name
const button = document.querySelector('.dropdown-btn');

// Get the link element inside the button
const link = button.querySelector('a');

// Add event listener for hover
button.addEventListener('mouseover', () => {
  // Update the text of the link element
  link.textContent = 'This is what i can do';
});

// Add event listener for mouseout
button.addEventListener('mouseout', () => {
  // Revert the text of the link element to the original text
  link.textContent = 'Know what i can do.';
});
