function isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

function redirectToLogin() {
    if (!isAuthenticated()) {
        window.location.href = 'auth.html';
    }
}

function navigate(path) {
    if (path === 'home.html') {
        window.location.href = path;
        return;
    }

    if (path === 'dailychecks.html' || path === 'comingsoon.html') {
        redirectToLogin();
    }

    window.location.href = path;
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        navigate(path);
    });
});

window.addEventListener('load', () => {
    redirectToLogin();
});