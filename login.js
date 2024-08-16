const loginForm = document.getElementById('loginForm');
const messageContainer = document.createElement('div');
loginForm.appendChild(messageContainer);

// Load the auth.js file dynamically
const scriptElement = document.createElement('script');
scriptElement.src = 'auth.js';
document.head.appendChild(scriptElement);

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const authResult = authenticate(username, password);  // skipcq: JS-0125

    messageContainer.textContent = authResult.message;
    if (authResult.success) {
        messageContainer.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000); // Redirect after 3 seconds (3000 milliseconds)
    } else {
        messageContainer.style.color = 'red';
    }

    loginForm.reset();
});