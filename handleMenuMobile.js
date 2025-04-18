import handleOverlayModal from './handleOverlayModal.js';
import handleBoxMenuMMobile from './handleBoxMenuMobile.js';

export default function handleMenuMobile () {
    const iconBtnClose = document.querySelector('.btn__close');
    const iconMenuMobile = document.querySelector('.menu__mobile__icon');
    const overlay = document.querySelector('.overlay__modal__search--mobile ');
    const learnMore = document.querySelector('.learn-more');;
   

    iconMenuMobile.addEventListener("click", async () => {

        const stateOverlay = handleOverlayModal(true);
        handleBoxMenuMMobile(stateOverlay);

        overlay.style.backgroundColor = "#000000d3";

        // logica para adicionar lista de produtos

        try {
            const containerBoxResult = document.querySelector(".container__box__list");

            const res = await fetch('./api.json');
            const data = await res.json();
            let results = [];

            Object.values(data).forEach(categoria => {
                categoria.forEach(subcategoria => {
                // console.log(subcategoria)

                results.push(subcategoria.title)

                    
                });
            });

            learnMore.addEventListener('click', () => {
                if(results.length === 0) {
                    containerBoxResult.innerHTML = '<li>Nenhum resultado encontrado.</li>';
                } else {
                    containerBoxResult.innerHTML = results.map((categoria, _) => `
                        <li data-item="${categoria}" class="categorie-result-item li__departament">
                            <strong>${categoria}</strong> >
                        </li>
                    `).join('');
                };

                const containerList = document.querySelector('.container__box__list');

                if (containerList.style.height === '0px' || containerList.style.height === '') {
                    containerList.style.height = 'auto';
                } else {
                    containerList.style.height = '0px';
                }
            })

            
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    })


    iconBtnClose.addEventListener('click', () => {
        const stateOverlay = handleOverlayModal(false);
        handleBoxMenuMMobile(stateOverlay);
        overlay.style.backgroundColor = "transparent";
    })
}


// subcategoria.items.forEach(item => {
                    //     if (item.toLowerCase().includes(searchTerm)) {
                    //         results.push({
                    //             title: subcategoria.title,
                    //             item
                    //         });
                    //     }
                    // });