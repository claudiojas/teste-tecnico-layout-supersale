export default function setupCategoryMenuHover() {
  const toggleBtn = document.querySelector(".btn__toggle__menu");
  const menu = document.querySelector(".section__navbar__menu");

  if (!toggleBtn || !menu) return;

  // Ativa o menu ao passar o mouse sobre o botão
  toggleBtn.addEventListener("mouseenter", () => {
    menu.classList.add("active");
  });

  // Mantém o menu aberto enquanto o mouse estiver sobre ele
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("active");
  });

  // Fecha o menu quando o mouse sai do botão e do menu
  toggleBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menu.matches(':hover')) {
        menu.classList.remove("active");
      }
    }, 200); // pequeno delay para evitar fechamento instantâneo
  });

  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("active");
  });
}
