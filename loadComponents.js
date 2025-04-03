function loadComponents() {
    // Carregando o componente de Header
    fetch('src/header/header.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));

    // Carregando o componente de newsletter
    fetch('src/herocontact/herocontact.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-contact').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o herocontact:', error));

    // Carregando o componente de newsletter
    fetch('src/newsletter/newsletter.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('newsletter-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o newsletter:', error));

    // Carregando o componete de Footer
    fetch('src/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

window.onload = loadComponents;

