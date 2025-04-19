import handleOverlayModal from './handleOverlayModal.js';

export default async function hydrantingModalSearch(inputValue, showModal = true) {
    const isMobile = window.innerWidth <= 1170;

    const modalContainer = document.querySelector(isMobile ? '.container__search__modal--mobile' : '.container__search__modal');
    const modalList = modalContainer.querySelector(isMobile ? '.container__search__results--mobile' : '.container__search__results');
    

    if (!modalContainer || !modalList) return;


    if (!inputValue?.trim() || !showModal) {
        modalContainer.style.display = 'none';
        inputValue = '';
        return;
    }

    try {
        const res = await fetch('./api.json');
        const data = await res.json();
        const searchTerm = inputValue.toLowerCase();
        let results = [];

        Object.values(data).forEach(categoria => {
            categoria.forEach(subcategoria => {
                subcategoria.items.forEach(item => {
                    if (item.toLowerCase().includes(searchTerm)) {
                        results.push({
                            title: subcategoria.title,
                            item
                        });
                    }
                });
            });
        });

        if (results.length === 0) {
            modalList.innerHTML = '<li>Nenhum resultado encontrado.</li>';
        } else {
            modalList.innerHTML = results.map((r, _) => `
                <li data-item="${r.item}" class="search-result-item">
                    <strong>🔎 ${r.title}:</strong> ${r.item}
                </li>
            `).join('');

            // adiciona os listeners depois que o innerHTML é setado
            const items = modalList.querySelectorAll('.search-result-item');

            items.forEach(itemEl => {
                itemEl.addEventListener('click', (e) => {
                    const selectedItem = itemEl.getAttribute('data-item');
                    alert(`Você seria direcionado(a) para a página de: ${selectedItem}`);

                    const input = document.querySelector(isMobile ? '.inpu__config__default__header' : '.input__search__header');
                    modalContainer.style.display = 'none';
                    handleOverlayModal(false);
                    input.value = '';
                });
            });
        }

        modalContainer.style.display = 'block';
        handleOverlayModal(true);
    } catch (err) {
        console.error('Erro ao buscar os dados:', err);
        modalList.innerHTML = '<li>Erro ao buscar os dados.</li>';
        modalContainer.style.display = 'block';
        handleOverlayModal(true);
    }
}
