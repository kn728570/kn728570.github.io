(() => {
  const menu = document.querySelector('.mobile-nav');
  if (!menu) return;

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      menu.removeAttribute('open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') menu.removeAttribute('open');
  });
})();
