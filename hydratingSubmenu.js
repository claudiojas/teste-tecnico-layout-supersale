export default function hydratingSubmenu(categoriaInicial = null) {
    fetch('api.json')
      .then(response => response.json())
      .then(data => {
        const listMenu = document.querySelectorAll(".list__nav li");
  
        function renderSubmenu(categoria) {
          const dadosCategoria = data[categoria];
          if (!dadosCategoria) {
            console.warn(`Categoria "${categoria}" não encontrada no JSON`);
            return;
          }
  
          const submenuCols = document.querySelectorAll(".submenu__col");
  
          dadosCategoria.forEach((coluna, index) => {
            const col = submenuCols[index];
            if (!col) return;
  
            const h1 = col.querySelector("h1");
            const listItems = col.querySelectorAll("li");
  
            h1.textContent = coluna.title;
  
            coluna.items.forEach((item, i) => {
              if (listItems[i]) {
                listItems[i].textContent = item;
              }
            });
  
            // Limpa li sobrando
            for (let i = coluna.items.length; i < listItems.length; i++) {
              listItems[i].textContent = "";
            }
          });
        }
  
        listMenu.forEach(element => {
          element.addEventListener("mouseenter", () => {
            renderSubmenu(element.id);
          });
        });
  
        // Renderiza submenu logo ao abrir
        if (categoriaInicial) {
          renderSubmenu(categoriaInicial);
        }
      });
  }
  