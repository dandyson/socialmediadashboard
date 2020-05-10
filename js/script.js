//Grabbing the stylesheet 
const stylesheet = document.getElementById('stylesheet');
const darkToggle = document.getElementById('toggleButton');
const toggleBall = document.getElementById('toggleBall');

toggleButton.addEventListener('click', () => {
    //Toggle between light and dark stylesheets on click of toggle button
    stylesheet.href.match('style.css') ? stylesheet.setAttribute('href', 'css/styleDark.css') : stylesheet.setAttribute('href', 'css/style.css');
    //Animate the toggle button ball to the right, to give that switch effect
    toggleBall.classList.toggle('ballToRight');
    toggleBall.style.transition = " 0.3s ease-in-out";
})




