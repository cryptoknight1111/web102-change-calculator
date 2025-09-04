const dueHover = document.getElementById('amount-due');
const receivedHover = document.getElementById('amount-received');
const calculateHover = document.getElementById('calculate-change');
const hoverSound = document.getElementById('hover-sound');
const calculateSound = document.getElementById('click-sound');

dueHover.addEventListener('mouseenter', () => {
    hoverSound.muted = false;
    hoverSound.currentTime = 0;
    hoverSound.play();
});

receivedHover.addEventListener('mouseenter', () => {
    hoverSound.muted = false;
    hoverSound.currentTime = 0;
    hoverSound.play();
});

calculateHover.addEventListener('mouseenter', () => {
    hoverSound.muted = false;
    hoverSound.currentTime = 0;
    hoverSound.play();
});
calculateHover.addEventListener('click' , () =>{
    calculateSound.muted = false;
    calculateSound.currentTime = 0;
    calculateSound.play();
})