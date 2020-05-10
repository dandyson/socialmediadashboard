//Grabbing the stylesheet 
const stylesheet = document.getElementById('stylesheet');
const darkToggle = document.getElementById('toggleButton');
const toggleBall = document.getElementById('toggleBall');

toggleButton.addEventListener('click', () => {
    stylesheet.href.match('style.css') ? stylesheet.setAttribute('href', 'css/styleDark.css') : stylesheet.setAttribute('href', 'css/style.css');
    toggleBall.classList.toggle('ballToRight');
    toggleBall.style.transition = " 0.3s ease-in-out";
})




