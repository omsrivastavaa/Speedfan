const blade = document.querySelector('.blades');
const speedButton = document.getElementById('speedButton');
let speed = 1;

speedButton.addEventListener('click' , function(){
    speed = speed % 10 + 1;
    speedButton.textContent = 'Speed: ' + speed;
    blade.style.animationDuration = 2 / speed + 's';
});