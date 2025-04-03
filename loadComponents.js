function loadComponents() {
    // Carregando o componente de Header
    fetch('src/header/header.html') 
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));

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
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));

    // Carregando os cards
    fetch('src/cardRelease/cardRelease.html')
        .then(response => response.text())
        .then(template => {
            const cardContainer = document.getElementById("cards-container");
            const cardsData = [
                { title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", imageUrl: "/src/assets/model__card.svg", oldPrice: "100,00", newPrice: "79,90", discount: 10, installment: "7,90" },
            ];

            cardsData.forEach(data => {
                const tempElement = document.createElement("div");
                tempElement.innerHTML = template.trim();
                const card = tempElement.firstElementChild;

                card.querySelector("img").src = data.imageUrl;
                card.querySelector("img").alt = data.title;
                card.querySelector("h3").textContent = data.title;
                card.querySelector(".old__price").textContent = `R$ ${data.oldPrice}`;
                card.querySelector(".new__price").textContent = `R$ ${data.newPrice}`;
                card.querySelector(".tagOff p").textContent = `${data.discount}% OFF`;
                card.querySelector(".price__variente p:nth-child(2)").textContent = `10x de R$ ${data.installment}`;

                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar os cards:', error));
}

window.onload = loadComponents;
