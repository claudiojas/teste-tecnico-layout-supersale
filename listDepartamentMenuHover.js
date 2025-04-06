export default function listDepartamentMenuHover() {
  const listItems = document.querySelectorAll(".list__nav__submenu li");
  const menu = document.querySelector(".section__navbar__menu");

  let touggleMenuDepartament = document.getElementById('touggle_relative_menu_departament');
  if (!touggleMenuDepartament) {
    touggleMenuDepartament = document.createElement('div');
    touggleMenuDepartament.id = 'touggle_relative_menu_departament';
    menu.appendChild(touggleMenuDepartament);
  }

  let isMouseInsideMenu = false;
  let hoveredItem = null;

  // Detecta se o mouse está dentro do menu
  touggleMenuDepartament.addEventListener("mouseenter", () => {
    isMouseInsideMenu = true;
  });

  touggleMenuDepartament.addEventListener("mouseleave", () => {
    isMouseInsideMenu = false;
    touggleMenuDepartament.innerHTML = '';
  });

  listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      hoveredItem = item; // Atualiza o item atualmente em foco

      fetch('src/header/touggle_relative_menu_departament.html')
        .then(response => response.text())
        .then(data => {
          // Só insere o conteúdo se o item ainda for o que está sendo focado
          if (hoveredItem === item) {
            touggleMenuDepartament.innerHTML = data;
          }
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
    });

    item.addEventListener("mouseleave", () => {
      // Delay para permitir transição para o menu
      setTimeout(() => {
        if (!isMouseInsideMenu && hoveredItem === item) {
          touggleMenuDepartament.innerHTML = '';
        }
      }, 100);
    });
  });
}
