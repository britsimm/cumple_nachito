function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const hint = document.querySelector('.hint');

  if (envelope.classList.contains('open')) return;

  envelope.classList.add('open');
  hint.classList.add('hidden');

  setTimeout(launchConfetti, 700);
}

function launchConfetti() {
  const colors = ['#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#fb923c'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.width = (6 + Math.random() * 8) + 'px';
      el.style.height = (6 + Math.random() * 8) + 'px';
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      el.style.animationDelay = '0s';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 40);
  }
}
