
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thanks — this form is ready to connect to your email, Wix, CRM or backend.');
  });
});
