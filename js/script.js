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

  // Initialize an array to store the names that have been used
  let used = [];

  // Select and match multiple pairs of names from the array
  for (let i = 0; i < names.length; i++) {
    // Select a random name from the array
    let name1 = names[Math.floor(Math.random() * names.length)];

    // Check if the name has already been used
    while (used.includes(name1)) {
      // If the name has been used, select a different name
      name1 = names[Math.floor(Math.random() * names.length)];
    }

    // Add the name to the used array
    used.push(name1);

    // Select a random name from the array
    let name2 = names[Math.floor(Math.random() * names.length)];

    // Check if the name has already been used
    while (used.includes(name2)) {
      // If the name has been used, select a different name
      name2 = names[Math.floor(Math.random() * names.length)];
    }

    // Add the name to the used array
    used.push(name2);

    // Add the match to the string
    matches += "Match: " + name1 + " and " + name2 + "<br>";
  }

  // Print the matches to the div element
  document.querySelector('#result').innerHTML = matches;
});