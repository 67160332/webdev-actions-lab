const helloBtn = document.getElementById('helloBtn');
const themeBtn = document.getElementById('themeBtn');
const statusText = document.getElementById('status');

if (helloBtn && statusText) {
  helloBtn.addEventListener('click', function () {
    statusText.textContent = 'Hello from GitHub Pages!';
  });
}

if (themeBtn) {
  themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  });
}