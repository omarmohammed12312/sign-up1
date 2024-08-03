// Get the button element
const btn = document.querySelector('.btn');

// Get the input elements
const nameInput = document.querySelector('input[name="Username"]');
const emailInput = document.querySelector('input[name="Email"]');
const passwordInput = document.querySelector('input[name="password"]');

// Add an event listener to the button
btn.addEventListener('click', (e) => {
  // Prevent the default link behavior
  e.preventDefault();

  // Get the input values
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Create an alert message
  const alertMessage = `
    Name: ${name}
    Email: ${email}
    Password: ${password}
  `;

  // Display the alert message
  alert(alertMessage);

  // Clear the input fields
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});