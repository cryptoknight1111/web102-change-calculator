const { animate } = anime; 
let spin;
document.getElementById('calculate-change').addEventListener('click', () => {
  if (spin) spin.cancel(); 
  spin = animate('.coin1, .coin2', { rotate: '+=360', scale: 1.1 }, {
    duration: 600,
    direction: 'alternate'
  });
});
