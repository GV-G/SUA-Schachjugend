const openButton = document.getElementById('sidebar-toggle');
const navbar = document.getElementsByTagName('nav')[0];
const homeImage = document.getElementsByTagName('header')[0];

const media = window.matchMedia("(width < 700px)");
media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navbar.setAttribute('inert', '');
  } else {
    navbar.removeAttribute('inert');
  }
}

function togglesidebar() {
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        openButton.setAttribute('aria-expanded', 'false');
        navbar.setAttribute('inert', '');
    } else {
        navbar.classList.add('show');
        openButton.setAttribute('aria-expanded', 'true');
        navbar.removeAttribute('inert');
    }
}

updateNavbar(media);