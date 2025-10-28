const openButton = document.getElementById('sidebar-open');
const navbar = document.getElementsByTagName('nav')[0];

const foldNav = window.matchMedia("(width < 1000px)");
foldNav.addEventListener('change', (e) => updateNavbar(e));

const banner = window.matchMedia("(width < 400px)");
banner.addEventListener('change', (e) => switchBannerImage(e));

/**
 * Pre-change the navbar to fit smaller screens
 * @param {boolean} e Whether the width of the screen is small enough
 */
function updateNavbar(e) {
  if (e.matches) {
    navbar.setAttribute('inert', '');
  } else {
    navbar.removeAttribute('inert');
  }
}

/** Change the banner image if the window is not wide enough */
function switchBannerImage(e) {
  if (e.matches) {
    document.getElementById('banner').setAttribute('src', 'SUA%20Logo.png');
  } else {
    document.getElementById('banner').setAttribute('src', 'SUA%20Banner.png');
  }
}

/**
 * Set the navbar class and attribute to hide it
 */
function closeSidebar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false');
  navbar.setAttribute('inert', '');
}

/**
 * Set the navbar class and attribute to show it
 */
function openSidebar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true');
  navbar.removeAttribute('inert');
}

updateNavbar(foldNav);
switchBannerImage(banner);