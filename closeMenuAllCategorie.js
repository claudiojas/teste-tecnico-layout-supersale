export default function closeMenuAllCategorie () {
    const menu = document.querySelector(".section__navbar__menu");
    const toggleBtn = document.querySelector(".btn__toggle__menu");
  
    menu.classList.remove("active");
    toggleBtn.style.color = "#000000"
}