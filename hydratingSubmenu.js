let dadosCategorias = null;

function renderSubmenu(categoria) {
  const dadosCategoria = dadosCategorias[categoria];
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

export default function hydratingSubmenu(categoriaInicial = null) {
  fetch('api.json')
    .then(response => response.json())
    .then(data => {
      dadosCategorias = data;

      const listMenu = document.querySelectorAll(".list__nav li");

      listMenu.forEach(element => {
        element.addEventListener("mouseenter", () => {
          renderSubmenu(element.id);
        });
      });

      // Também adiciona eventos aos itens do menu expandido
      document.querySelectorAll(".list__nav__submenu li").forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const categoria = item.getAttribute("data-categoria");
          if (categoria) {
            renderSubmenu(categoria);
          }
        });
      });

      // Renderiza submenu inicial
      if (categoriaInicial) {
        renderSubmenu(categoriaInicial);
      }
    });
}
