document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    login(username, password).then(token => {
        localStorage.setItem('token', token);
        window.location.href = 'index.html';
    }).catch(error => {
        alert('Login failed: ' + error.message);
    });
});

async function login(username, password) {
    const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data.token;
}