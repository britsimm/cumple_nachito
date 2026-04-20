function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const hint = document.querySelector('.hint');
  const chant = document.querySelector('.chant');
  const letter = document.querySelector('.letter');

  if (envelope.classList.contains('open')) return;

  envelope.classList.add('open');
  hint.classList.add('hidden');

  // ocultar chant
  chant.classList.remove('show');
  chant.classList.add('hidden');

  launchConfetti();
  launchLogos();

  // 👇 cuando la carta termina de abrirse
  const onEnd = (e) => {
    if (e.propertyName === 'transform') {

      // 👇 esperar a que el usuario haga scroll hasta el final
      letter.addEventListener('scroll', () => {
        const atBottom =
          letter.scrollTop + letter.clientHeight >= letter.scrollHeight - 5;

        if (atBottom) {
          chant.classList.remove('hidden');
          chant.classList.add('show');
        }
      });

      letter.removeEventListener('transitionend', onEnd);
    }
  };

  letter.addEventListener('transitionend', onEnd);
}


function launchConfetti() {
  const colors = ['#E4002B', '#003366', '#ffffff']; // rojo, azul, blanco

  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';

      const size = 6 + Math.random() * 10;
      const isRectangle = Math.random() > 0.5;

      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-10px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];

      el.style.width = size + 'px';
      el.style.height = isRectangle ? size * 0.5 + 'px' : size + 'px';

      el.style.animationDuration = (2 + Math.random() * 2.5) + 's';

      // Movimiento lateral tipo zig-zag
      const drift = (Math.random() - 0.5) * 200;
      el.style.setProperty('--drift', drift + 'px');

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 5000);
    }, i * 20);
  }
}


function launchLogos() {
  const logos = [
    'img/tkvgn.jpg',
  ];

  for (let i = 0; i < 12; i++) { // menos logos
    setTimeout(() => {
      const img = document.createElement('img');
      img.className = 'flying-logo';

      const logo = logos[Math.floor(Math.random() * logos.length)];
      img.src = logo;

      const size = 60 + Math.random() * 60; // más grandes

      img.style.width = size + 'px';

      // arrancan desde abajo
      img.style.left = Math.random() * 100 + 'vw';
      img.style.top = '100vh';

      // movimiento lateral más suave
      const drift = (Math.random() - 0.5) * 200;
      img.style.setProperty('--drift', drift + 'px');

      // rotación
      img.style.setProperty('--rotate', (Math.random() * 360) + 'deg');

      // duración
      img.style.animationDuration = (2.5 + Math.random() * 1.5) + 's';

      document.body.appendChild(img);

      setTimeout(() => img.remove(), 5000);
    }, i * 60); // más espaciados
  }
}

const chant = document.querySelector('.chant');

setTimeout(() => {
  chant.classList.add('show');
}, 300);
