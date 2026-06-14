function toggleTheme() {
  var html = document.documentElement;
  var current = html.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon(next);
}

function updateIcon(theme) {
  var icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

function toggleMenu() {
  var links = document.getElementById('nav-links');
  if (links) links.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  var theme = localStorage.getItem('theme') || 'light';
  updateIcon(theme);
});
