import hydratingSubmenu from "./hydratingSubmenu.js";
import closeMenuAllCategorie from "./closeMenuAllCategorie.js";
import closeMenuDepartament from "./closeMenuDepartament.js";

export default function openAllItensNavMenu () {
    const btnAllMenu = document.querySelectorAll(".btn__all__products__menu");
    let touggleMenuDepartament = document.getElementById('touggle_relative_menu_departament');

    if (!touggleMenuDepartament) {
      touggleMenuDepartament = document.createElement('div');
      touggleMenuDepartament.id = 'touggle_relative_menu_departament';
      menu.appendChild(touggleMenuDepartament);
    }

    btnAllMenu.forEach((item) => {
        item.addEventListener("click", () => {
            const categoriaInicial = item.getAttribute("data-categoria");

            if(touggleMenuDepartament.innerHTML === '') {
                closeMenuAllCategorie();
                fetch('src/header/touggle_relative_menu_departament.html')
                .then(response => response.text())
                .then(data => {
                    touggleMenuDepartament.innerHTML = data;

                    const containerMenuDepartament = document.getElementById("container__menu__departament");
                    containerMenuDepartament.style.left = "329px";

                    hydratingSubmenu(categoriaInicial); 
                });
            } else {
                closeMenuDepartament();
            }
        });
    });
}
