
Script · JS
const helloBtn = document.getElementById('helloBtn');
const themeBtn = document.getElementById('themeBtn');
const statusText = document.getElementById('status');
 
// หัวใจลอยขึ้นตอนกดปุ่ม
function burstHearts() {
  const icons = ['💗', '🌸', '✨', '💖', '🎀'];
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = (10 + Math.random() * 80) + 'vw';
    heart.style.fontSize = (18 + Math.random() * 18) + 'px';
    heart.style.animationDelay = (Math.random() * 0.4) + 's';
    document.body.appendChild(heart);
    setTimeout(function () { heart.remove(); }, 2400);
  }
}
 
if (helloBtn && statusText) {
  helloBtn.addEventListener('click', function () {
    statusText.textContent = '✦ Hello from GitHub Pages!';
    burstHearts();
  });
}
 
// สลับธีม สว่าง/มืด และจำค่าที่เลือกไว้
function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  if (themeBtn) {
    themeBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  }
}
 
try {
  applyTheme(localStorage.getItem('theme') === 'dark');
} catch (e) {
  applyTheme(false);
}
 
if (themeBtn) {
  themeBtn.addEventListener('click', function () {
    const isDark = !document.body.classList.contains('dark');
    applyTheme(isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  });
}
 
