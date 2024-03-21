const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const alertMessage = document.getElementById('alert-message');

// Replace with your actual secure user data storage mechanism (avoid storing passwords in plain text)
const users = [
    { username: 'karan', password: 'karan@123' },
    // Add more users here
];

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    const foundUser = users.find(user => user.username === username);

    // Use secure password comparison (avoid plain text comparison)
    // Replace with proper password hashing/verification logic
    const isPasswordCorrect = foundUser && foundUser.password === password;  // placeholder

    if (isPasswordCorrect) {
        alertMessage.textContent = 'Login Successful'; // Clear any previous error messages
        // Handle successful login (redirect, etc.)
        console.log('Login successful!');
    }
    else if (username === '' && password === '') {
        alertMessage.textContent = 'Please Enter Username and Password'

    } else {
        alertMessage.textContent = 'Invalid username or password.';
    }

    usernameInput.value = '';
    passwordInput.value = '';
});
