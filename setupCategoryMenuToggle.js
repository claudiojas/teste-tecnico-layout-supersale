export default function setupCategoryMenuHover() {
  const toggleBtn = document.querySelector(".btn__toggle__menu");
  const menu = document.querySelector(".section__navbar__menu");

  if (!toggleBtn || !menu) return;

  // Ativa o menu ao passar o mouse sobre o botão
  toggleBtn.addEventListener("click", () => {
    menu.classList.contains('active') 
      ? menu.classList.remove("active") 
      : menu.classList.add("active");

  });

  // Mantém o menu aberto enquanto o mouse estiver sobre ele
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("active");
  });
}
