const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/dashboard');
    } else {
      document.getElementById('login-fail').innerHTML = 'Login Failed';
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
