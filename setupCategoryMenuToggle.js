export default function setupCategoryMenuHover() {
  const toggleBtn = document.querySelector(".btn__toggle__menu");
  const menu = document.querySelector(".section__navbar__menu");
  const icon = document.querySelector(".categorie__item .icon")


  if (!toggleBtn || !menu) return;

  // Ativa o menu ao clicar no botão
  toggleBtn.addEventListener("click", () => {
    // menu.classList.contains('active') 
    //   ? menu.classList.remove("active") 
    //   : menu.classList.add("active");

    if(menu.classList.contains('active')){
      menu.classList.remove("active");
      toggleBtn.style.color = "#000000"
    } else {
      menu.classList.add("active");
      toggleBtn.style.color = "#005CFF"
    }

  });

  // Mantém o menu aberto enquanto o mouse estiver sobre ele
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("active");
  });
}
