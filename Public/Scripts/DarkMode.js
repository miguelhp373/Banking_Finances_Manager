//darkmode
const ActiveDarkMode = document.querySelector('#DarkMode');

ActiveDarkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.header').classList.toggle('dark');
  document.querySelector('#sidebar-wrapper').classList.toggle('dark');
  document.querySelector('#hamburguer').classList.toggle('dark');
  document.querySelector('#nav-icon').classList.toggle('dark');
  
});





