import closeMenuDepartament from "./closeMenuDepartament.js";
import closeMenuAllCategorie from "./closeMenuAllCategorie.js"

export default function setupCategoryMenuHover() {
  const toggleBtnsDropDown = document.querySelector(".btn__toggle__menu");
  const dropDownProducts = document.querySelector(".section__navbar__menu");


  if (!toggleBtnsDropDown || !dropDownProducts) return;

  // Ativa o menu ao clicar no botão
  toggleBtnsDropDown.addEventListener("click", () => {
    closeMenuDepartament();

    if(dropDownProducts.classList.contains('active')){
      closeMenuAllCategorie();
    } else {
      dropDownProducts.classList.add("active");
      toggleBtnsDropDown.style.color = "#005CFF"
    }

  });

  // Mantém o menu aberto enquanto o mouse estiver sobre ele
  dropDownProducts.addEventListener("mouseenter", () => {
    dropDownProducts.classList.add("active");
  });


  // menu.addEventListener("mouseleave", () => {
  //   closeMenuAllCategorie();
  // })
}
