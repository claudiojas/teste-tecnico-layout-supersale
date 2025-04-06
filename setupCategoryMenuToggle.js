import closeMenuDepartament from "./closeMenuDepartament.js";
import closeMenuAllCategorie from "./closeMenuAllCategorie.js"

export default function setupCategoryMenuHover() {
  const toggleBtn = document.querySelector(".btn__toggle__menu");
  const menu = document.querySelector(".section__navbar__menu");


  if (!toggleBtn || !menu) return;

  // Ativa o menu ao clicar no botão
  toggleBtn.addEventListener("click", () => {
    closeMenuDepartament();
    if(menu.classList.contains('active')){
      closeMenuAllCategorie();
    } else {
      menu.classList.add("active");
      toggleBtn.style.color = "#005CFF"
    }

  });

  // Mantém o menu aberto enquanto o mouse estiver sobre ele
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("active");
  });


  // menu.addEventListener("mouseleave", () => {
  //   closeMenuAllCategorie();
  // })
}
