import handleOverlayModal from './handleOverlayModal.js';
import handleBoxMenuMMobile from './handleBoxMenuMobile.js';

export default async function handleMenuMobile () {
    const iconBtnClose = document.querySelector('.btn__close');
    const iconMenuMobile = document.querySelector('.menu__mobile__icon');
    const overlay = document.querySelector('.overlay__modal__search--mobile ');
    const learnMore = document.querySelector('.learn-more');;
    const containerResultsSubmenu = document.querySelector(".container__submenu__results");

    const res = await fetch('./api.json');
    const data = await res.json();
    const infoSubmenuResult = document.querySelector(".info__submenu__results");


   

    iconMenuMobile.addEventListener("click", async () => {

        const stateOverlay = handleOverlayModal(true);
        handleBoxMenuMMobile(stateOverlay);

        overlay.style.backgroundColor = "#000000d3";

        // logica para adicionar lista de produtos

        try {
            const containerBoxResult = document.querySelector(".container__box__list");
            const buttonReturn = document.querySelector(".header__submenu__results");

            let resultsCategorie = []; 
            let objectKeys = [];

            const categorieNames = Object.keys(data);

            categorieNames.forEach( categorie => {
                objectKeys.push(categorie);
            })
            Object.values(data).forEach(categoria => {
                categoria.forEach(subcategoria => {
                    resultsCategorie.push(subcategoria)
                });
            });

            learnMore.addEventListener('click', () => {
                if (objectKeys.length === 0) {
                    containerBoxResult.innerHTML = '<li>Nenhum resultado encontrado.</li>';
                } else {
                    const translate = {
                      cell: 'Celulares',
                      eletro: 'Eletrodomésticos',
                      infor: 'Informática',
                      'audio/video': 'Áudio e Vídeo',
                      furniture: 'Móveis',
                      supermarket: 'Supermercado',
                      deal_of_the_day: 'Oferta do Dia',
                      'our_stores!': 'Nossas Lojas',
                      promo_code: 'Cupom de Desconto',
                      premium_products: 'Produtos Premium',
                      best_sellers: 'Mais Vendidos',
                      app_download: 'Baixar App',
                      aboutme: 'Sobre Nós',
                      support: 'Suporte'
                    };
                
                    const remove = ['Sobre Nós', 'Suporte'];
                
                    // Traduz e filtra os itens ao mesmo tempo
                    const translatedItems = objectKeys
                      .map(key => ({
                        original: key,
                        translated: translate[key] || key
                      }))
                      .filter(item => !remove.includes(item.translated));
                
                    // Monta o HTML com nome traduzido e data-item com o original
                    containerBoxResult.innerHTML = translatedItems.map(({ original, translated }) => `
                      <li data-item="${original}" class="categorie-result-item li__departament">
                        <strong class="categorie-title">${translated}</strong> >
                      </li>
                    `).join('');
                }

                const containerList = document.querySelector('.container__box__list');

                if (containerList.style.height === '0px' || containerList.style.height === '') {
                    containerList.style.height = 'auto';
                } else {
                    containerList.style.height = '0px';
                }


                const categorieTitle = document.querySelectorAll(".li__departament");
                categorieTitle.forEach(title => {
                    title.addEventListener('click', (e) => {

                        const selectProduct = e.target.closest('li')?.dataset.item;

                        if (!selectProduct) return;

                        containerResultsSubmenu.style.transform = 'translateY(0)';

                        const selectedItems = data[selectProduct];

                        infoSubmenuResult.innerHTML = '';
                        selectedItems.forEach(item => {
                            const h1 = document.createElement('h1');
                            h1.textContent = item.title || 'Sem título';
                            infoSubmenuResult.appendChild(h1);

                            if (Array.isArray(item.items)) {
                                const ul = document.createElement('ul');
                      
                                item.items.forEach(prod => {
                                  const li = document.createElement('li');
                                  li.textContent = prod;
                                  ul.appendChild(li);
                                });
                      
                                infoSubmenuResult.appendChild(ul);
                            }
                        });
                    })
                });


            })

            buttonReturn.addEventListener('click', () => {
                containerResultsSubmenu.style.transform = 'translatex(-100%)';
            })
            
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    })


    iconBtnClose.addEventListener('click', () => {
        const stateOverlay = handleOverlayModal(false);
        handleBoxMenuMMobile(stateOverlay);
        overlay.style.backgroundColor = "transparent";
    });



    const aboutSelect = document.querySelector(".about-select");
    const supportSelect = document.querySelector(".support-select");

    aboutSelect.addEventListener("click", () => {
        renderSubmenuContent("aboutme", data, infoSubmenuResult);
    });
      
    supportSelect.addEventListener("click", () => {
        renderSubmenuContent("support", data, infoSubmenuResult);
    });
};


// Função para exibir o conteúdo da categoria sobre nos e suporte
function renderSubmenuContent(categoryKey, data, infoSubmenuResult) {
    const containerResultsSubmenu = document.querySelector(".container__submenu__results");

    const selectedItems = data[categoryKey];
  
    if (!selectedItems || !Array.isArray(selectedItems)) return;
  
    containerResultsSubmenu.style.transform = 'translateY(0)';

    infoSubmenuResult.innerHTML = ''; 
  
    selectedItems.forEach(item => {
      const h1 = document.createElement('h1');
      h1.textContent = item.title || 'Sem título';
      infoSubmenuResult.appendChild(h1);
  
      if (Array.isArray(item.items)) {
        const ul = document.createElement('ul');
  
        item.items.forEach(prod => {
          const li = document.createElement('li');
          li.textContent = prod;
          ul.appendChild(li);
        });
  
        infoSubmenuResult.appendChild(ul);
      }
    });  
  }