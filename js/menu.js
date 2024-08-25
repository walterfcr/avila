

document.addEventListener('DOMContentLoaded', function() {
  const menuContainer = document.querySelector('.menu__container');
  const menuLinks = document.querySelectorAll('.menu__link');
  const hamburger = document.querySelector('.menu__hamburguer');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', function() {
    menuContainer.classList.toggle('open');
  });

  // Close menu on "Inicio" link click
  document.querySelector('.menu__link[href="#inicio"]').addEventListener('click', function() {
    menuContainer.classList.remove('open');
  });
});

