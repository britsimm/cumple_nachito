function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const hint = document.querySelector('.hint');

  if (envelope.classList.contains('open')) return;

  envelope.classList.add('open');
  hint.classList.add('hidden');

  setTimeout(launchConfetti, 700);
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
