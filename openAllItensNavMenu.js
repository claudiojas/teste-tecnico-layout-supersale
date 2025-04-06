import closeMenuDepartament from "./closeMenuDepartament.js";
import closeMenuAllCategorie from "./closeMenuAllCategorie.js"

export default function openAllItensNavMenu () {
    const btnCell = document.querySelector(".btn__cell");
    let touggleMenuDepartament = document.getElementById('touggle_relative_menu_departament');

    if (!touggleMenuDepartament) {
      touggleMenuDepartament = document.createElement('div');
      touggleMenuDepartament.id = 'touggle_relative_menu_departament';
      menu.appendChild(touggleMenuDepartament);
    }

    btnCell.addEventListener("mouseenter", () => {

        if(touggleMenuDepartament.innerHTML === '') {
            closeMenuAllCategorie();
            fetch('src/header/touggle_relative_menu_departament.html')
            .then(response => response.text())
            .then(data => {
                touggleMenuDepartament.innerHTML = data;
    
                const containerMenuDepartament = document.getElementById("container__menu__departament");
                containerMenuDepartament.style.width = "100%"
            });
        } else {
            closeMenuDepartament();
        }

    });
}
