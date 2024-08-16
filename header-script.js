const navItems = document.querySelectorAll('.nav-item');
const homeShape = document.querySelector('.home-shape');
const dailyChecksShape = document.querySelector('.daily-checks-shape');
const severeWeatherShape = document.querySelector('.severe-weather-shape');
const tropicsShape = document.querySelector('.tropics-shape');
const winterShape = document.querySelector('.winter-shape');
const backToWeatherHubShape = document.querySelector('.back-to-weather-hub-shape');

homeShape.style.background = '#FFFFFF'

navItems.forEach((navItem) => {
    navItem.addEventListener('mouseenter', () => {
        if (navItem.classList.contains('home-shape')) {
            homeShape.style.opacity = '1';
        } else if (navItem.classList.contains('daily-checks-shape')) {
            dailyChecksShape.style.background = '#5BE765';
        } else if (navItem.classList.contains('severe-weather-shape')) {
            severeWeatherShape.style.background = '#FF6D6D';
        } else if (navItem.classList.contains('tropics-shape')) {
            tropicsShape.style.background = '#E5D582';
        } else if (navItem.classList.contains('winter-shape')) {
            winterShape.style.background = '#4AA1D8';
        } else if (navItem.classList.contains('back-to-weather-hub-shape')) {
            backToWeatherHubShape.style.background = '#6D6DFF';
        }
    });

    navItem.addEventListener('mouseleave', () => {
        dailyChecksShape.style.background = 'none';
        severeWeatherShape.style.background = 'none';
        tropicsShape.style.background = 'none';
        winterShape.style.background = 'none';
        backToWeatherHubShape.style.background = 'none';
    });
});

const menuToggle = document.querySelector('.mobile-header .menu-toggle');
const mobileNav = document.querySelector('.mobile-header .mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});