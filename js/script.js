// script.js

// Función para mostrar imagen o video en modal
function createModal(mediaSrc, type) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.cursor = 'pointer';
  
  let mediaElement;
  
  if (type === 'image') {
    mediaElement = document.createElement('img');
  } else {
    mediaElement = document.createElement('video');
    mediaElement.controls = true;
    mediaElement.autoplay = true;
  }

  mediaElement.src = mediaSrc;
  mediaElement.style.maxWidth = '90%';
  mediaElement.style.maxHeight = '90%';
  modal.appendChild(mediaElement);

  modal.addEventListener('click', () => {
    modal.remove();
  });

  document.body.appendChild(modal);
}

// Agregar eventos para imágenes
document.querySelectorAll('.image-container img').forEach(img => {
  img.addEventListener('click', () => createModal(img.src, 'image'));
});

// Agregar eventos para videos
document.querySelectorAll('.video-container video').forEach(video => {
  video.addEventListener('click', () => {
    const videoSrc = video.querySelector('source').src;
    createModal(videoSrc, 'video');
  });
});

// Función para generar corazones flotantes aleatoriamente
function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.position = 'absolute';
  heart.style.animationDuration = Math.random() * 2 + 2 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Crear corazones cada 500ms
setInterval(createHeart, 500);
