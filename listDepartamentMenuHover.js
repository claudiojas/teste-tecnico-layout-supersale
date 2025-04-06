import closeMenuDepartament from "./closeMenuDepartament.js";
import hydratingSubmenu from "./hydratingSubmenu.js"; // ⬅️ import necessário

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

  touggleMenuDepartament.addEventListener("mouseenter", () => {
    isMouseInsideMenu = true;
  });

  touggleMenuDepartament.addEventListener("mouseleave", () => {
    isMouseInsideMenu = false;
    closeMenuDepartament();
  });

  listItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      hoveredItem = item;
      const categoria = item.getAttribute("data-categoria");

      fetch('src/header/touggle_relative_menu_departament.html')
        .then(response => response.text())
        .then(data => {
          if (hoveredItem === item) {
            touggleMenuDepartament.innerHTML = data;

            // Reaplica o submenu com base na categoria
            if (categoria) {
              hydratingSubmenu(categoria);
            }
          }
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
    });

    item.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!isMouseInsideMenu && hoveredItem === item) {
          closeMenuDepartament();
        }
      }, 100);
    });
  });
}
