document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.dataset.lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-content').forEach(c => c.classList.remove('visible'));
        document.getElementById('lang-' + lang).classList.add('visible');
      });
    });
