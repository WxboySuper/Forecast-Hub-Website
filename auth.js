function authenticate(username, password) {  // skipcq: JS-0128
    const users = {
        "forecast-admin": "3S-;xj>U6kzC1p(dQ6Zq"
    };

    if (username in users && users[username] === password) {
        // Set authentication status in local storage
        localStorage.setItem('isAuthenticated', true);
        return { success: true, message: 'Login successful' };
    } else {
        // Remove authentication status from local storage
        localStorage.removeItem('isAuthenticated');
        return { success: false, message: 'Login failed' };
    }
}