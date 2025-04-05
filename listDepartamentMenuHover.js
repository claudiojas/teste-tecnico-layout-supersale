
export default function listDepartamentMenuHover () {
    const listItems = document.querySelectorAll(".list__nav__submenu li");
    let touggleMenuDepartament = document.getElementById('touggle_relative_menu_departament');

    if(!touggleMenuDepartament) {
      touggleMenuDepartament =  document.createElement('div');
      touggleMenuDepartament.id = 'touggle_relative_menu_departament';
    }
  
    if (!listItems.length) return;

    listItems.forEach((item) => {
      
      item.addEventListener("mouseenter", () => {
        fetch('src/header/touggle_relative_menu_departament.html') 
          .then(response => response.text())
          .then(data => {
              document.getElementById('touggle_relative_menu_departament').innerHTML = data;
          })
          .catch(error => console.error('Erro ao carregar o header:', error));
      });

      item.addEventListener("mouseleave", () => {
        touggleMenuDepartament.innerHTML = '';
      });
    });

}