const signupFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the  signup form

  const username = document.querySelector('#user-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  // Send a POST request to the API endpoint
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      console.log(response);
      document.getElementById('login-fail').innerHTML = 'sign-up failed, please try again with unique username or password greater than 8 characters';

    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
