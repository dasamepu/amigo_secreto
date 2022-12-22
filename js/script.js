// secret-friend.js

// Initialize an array to store the names
let names = [];

// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the name from the input field
  const name = document.querySelector('#name').value;

  // Add the name to the array
  names.push(name);

  // Clear the input field
  document.querySelector('#name').value = '';
});

// Select and match two random names from the array
const name1 = names[Math.floor(Math.random() * names.length)];
const name2 = names[Math.floor(Math.random() * names.length)];

// Print the match to the div element
document.querySelector('#result').innerHTML = "Match: " + name1 + " and " + name2;