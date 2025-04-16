import loadInitialCards from "./loadInitialCard.js";
import loadCards from "./loadCards.js";
import setupCategoryMenuHover from "./setupCategoryMenuToggle.js";
import listDepartamentMenuHover from "./listDepartamentMenuHover.js";
import openAllItensNavMenu from "./openAllItensNavMenu.js";
import hydratingSubmenu from "./hydratingSubmenu.js";
import acordionFunction from "./acordionFunction.js";
import searchReturn from "./searchReturn.js";


function loadComponents() {
    // Carregando o componente de Header
    fetch('src/header/header.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            setupCategoryMenuHover();
            listDepartamentMenuHover();
            openAllItensNavMenu();
            hydratingSubmenu();
            searchReturn();
        })
        .catch(error => console.error('Erro ao carregar o header:', error));

    // Carregando o componente de produto em destaque 1
    fetch('src/featuredProduct/featuredProduct.html') 
      .then(response => response.text())
      .then(data => {
          document.getElementById('featured-product').innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o produto em destaque 1:', error));

    // Carregando o componente de bunner central da página
    fetch('src/heroBunnerCenter/heroBunnerCenter.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-bunner-center').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o bunner central:', error));

    // Carregando o componente de produto em destaque 2
    fetch('src/featuredProduct/featuredProduct.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('featured-product-2').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o produto em destaque 2:', error));

    // Carregando o componente de Hero Contact
    fetch('src/herocontact/herocontact.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-contact').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o herocontact:', error));

    // Carregando o componente de Newsletter
    fetch('src/newsletter/newsletter.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('newsletter-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o newsletter:', error));

    // Carregando o componente de Footer
    fetch('src/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            acordionFunction();
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));

    // Carregando os cards do inicio
    loadInitialCards();

    // Carregando os cards
    loadCards();

}

window.onload = loadComponents;
