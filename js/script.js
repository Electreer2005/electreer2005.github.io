// Muestra u oculta el menú en mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Mostrar reproductor en vivo
const openLiveBtn = document.getElementById('openLivePlayer');
const livePlayerDiv = document.getElementById('livePlayer');
const audioLive = document.getElementById('audioLive');

openLiveBtn.addEventListener('click', () => {
  livePlayerDiv.style.display = 'block';
  audioLive.play();
});

