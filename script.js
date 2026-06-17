
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (window.innerWidth <= 900) {
      event.preventDefault();
      link.parentElement.classList.toggle("open");
    }
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form preview only. Next step: connect this to email, Google Sheets or CRM.");
  });
});
