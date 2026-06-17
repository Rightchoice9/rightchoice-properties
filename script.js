
const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");
if(toggle&&menu){toggle.addEventListener("click",()=>menu.classList.toggle("open"))}
document.querySelectorAll(".mega-trigger > a").forEach(link=>{
  link.addEventListener("click",e=>{
    if(window.innerWidth<=900){
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    }
  });
});
document.querySelectorAll("form").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    alert("Form preview only. Next step: connect this to email, Google Sheets or CRM.");
  });
});
