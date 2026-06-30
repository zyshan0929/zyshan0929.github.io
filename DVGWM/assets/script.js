document.documentElement.classList.add('js');

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

const copyBtn = document.getElementById('copy-btn');
const bibtex = document.getElementById('bibtex');
if (copyBtn && bibtex) {
  copyBtn.addEventListener('click', () => {
    const text = bibtex.innerText;
    const restore = () => {
      copyBtn.textContent = 'Copy';
      copyBtn.classList.remove('copied');
    };
    const done = () => {
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(restore, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {
        copyBtn.textContent = 'Copy failed';
        setTimeout(restore, 2000);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); }
      catch (_) { copyBtn.textContent = 'Copy failed'; setTimeout(restore, 2000); }
      document.body.removeChild(ta);
    }
  });
}
