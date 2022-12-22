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

  // Create a copy of the array to use for selecting names
  let remaining = [...names];

  // Select and match multiple pairs of names from the array
  while (remaining.length > 0) {
    // Select a random name from the array
    const index = Math.floor(Math.random() * remaining.length);
    const name1 = remaining[index];

    // Remove the name from the array
    remaining = remaining.filter((n) => n !== name1);

    // Select a random name from the remaining names
    const index2 = Math.floor(Math.random() * remaining.length);
    const name2 = remaining[index2];

    // Remove the name from the array
    remaining = remaining.filter((n) => n !== name2);

    matches += "Match: " + name1 + " and " + name2 + "<br>";
  }

  // Print the matches to the div element
  document.querySelector('#result').innerHTML = matches;
});