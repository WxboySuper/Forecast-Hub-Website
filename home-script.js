const dailyChecksDiv = document.querySelector('.daily-checks');
const dailyChecksMainRectangle = document.querySelector('.daily-checks-main-rectangle');
const severeWeatherDiv = document.querySelector('.severe-weather');
const severeWeatherMainRectangle = document.querySelector('.severe-weather-main-rectangle');
const tropicsDiv = document.querySelector('.tropics');
const tropicsMainRectangle = document.querySelector('.tropics-main-rectangle');
const winterDiv = document.querySelector('.winter');
const winterMainRectangle = document.querySelector('.winter-main-rectangle');

dailyChecksDiv.addEventListener('mouseenter', () => {
    dailyChecksMainRectangle.style.boxShadow = '0px 0px 10px 0px rgb(0,0,0,0.5)';
});

dailyChecksDiv.addEventListener('mouseleave', () => {
    dailyChecksMainRectangle.style.boxShadow = 'none';
});

severeWeatherDiv.addEventListener('mouseenter', () => {
    severeWeatherMainRectangle.style.boxShadow = '0px 0px 10px 0px rgb(0,0,0,0.5)';
});

severeWeatherDiv.addEventListener('mouseleave', () => {
    severeWeatherMainRectangle.style.boxShadow = 'none';
});

tropicsDiv.addEventListener('mouseenter', () => {
    tropicsMainRectangle.style.boxShadow = '0px 0px 10px 0px rgb(0,0,0,0.5)';
});

tropicsDiv.addEventListener('mouseleave', () => {
    tropicsMainRectangle.style.boxShadow = 'none';
})

winterDiv.addEventListener('mouseenter', () => {
    winterMainRectangle.style.boxShadow = '0px 0px 10px 0px rgb(0,0,0,0.5)';
});

winterDiv.addEventListener('mouseleave', () => {
    winterMainRectangle.style.boxShadow = 'none';
});