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

  // Initialize a string to store the matches
  let matches = '';

  // Select and match multiple pairs of names from the array
  for (let i = 0; i < names.length; i++) {
    const name1 = names[Math.floor(Math.random() * names.length)];
    const name2 = names[Math.floor(Math.random() * names.length)];
    matches += "Match " + (i + 1) + ": " + name1 + " and " + name2 + "<br>";
  }

  // Print the matches to the div element
  document.querySelector('#result').innerHTML = matches;
});