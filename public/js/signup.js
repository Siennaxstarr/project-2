// Global Elements
const signupUsername = document.querySelector('#signup-username');
const signupnPassword = document.querySelector('#signup-password');
const jsearchKey = document.querySelector('#jsearch-key')
const signupBtn = document.querySelector('#signup-button');

//Logs in user
signupBtn.addEventListener('click', async (event)=> {
    event.preventDefault();

    const username = signupUsername.value.trim();
    const password = signupnPassword.value.trim();
    const apiKey = jsearchKey.value.trim();

    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, apiKey }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json()
      if (response.ok) {
        alert('Account creation successful')
        document.location.replace('/login');
      } else {
        alert('Wrong username or password');

      }
})