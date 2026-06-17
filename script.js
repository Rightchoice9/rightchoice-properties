
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Form ready. Next step: connect this to your email, Google Sheets, CRM or website backend.');
  });
});
