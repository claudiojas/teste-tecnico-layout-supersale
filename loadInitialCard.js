// loadInitialCards.js
import setupCarousel from "./setupCarousel.js";

export default function loadInitialCards() {
  fetch("src/cardRelease/cardRelease.html")
    .then((response) => response.text())
    .then((template) => {
      const cardContainer = document.getElementById("cards-components-init");
      cardContainer.scrollLeft = 0;

      const cardsData = [
        { title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit", imageUrl: "/src/assets/model__card.svg", oldPrice: "100,00", newPrice: "79,90", discount: 10, installment: "7,90" },
        { title: "Relógio Masculino Casio Vintage Prata Digital", imageUrl: "https://universaljoias.com.br/wp-content/uploads/2024/11/Relogio-Guess-Masculino-Azul-GW0803G2-1-1.jpg", oldPrice: "199,90", newPrice: "159,90", discount: 20, installment: "15,99" },
        { title: "Smartphone Samsung Galaxy S21 128GB", imageUrl: "https://www.forcetech.com.br/cdn/shop/products/Celular-Samsung-Galaxy-S21-5G-128GB-8GB-RAM-Cinza_1.jpg?v=1624630661", oldPrice: "3299,90", newPrice: "2799,90", discount: 15, installment: "279,99" },
        { title: "Notebook Dell Inspiron 15.6'' i5 8GB", imageUrl: "https://a-static.mlcdn.com.br/800x600/notebook-dell-inspiron-15-i15-i120k-a25p-intel-core-i5-8gb-ram-512gb-ssd-156-full-hd-windows-11/magazineluiza/238557900/2b1efd373a9fabc6f00bf3d866bc31a6.jpg", oldPrice: "4299,90", newPrice: "3899,90", discount: 10, installment: "389,99" },
        { title: "Fone de Ouvido Bluetooth JBL Tune 510BT", imageUrl: "https://files.tecnoblog.net/wp-content/uploads/2021/07/JBL-Tune-510BT-12-1060x596.jpg", oldPrice: "299,90", newPrice: "229,90", discount: 23, installment: "22,99" },
        { title: "Jaqueta Corta-Vento Adidas Preta Masculina", imageUrl: "https://images.tcdn.com.br/img/img_prod/1089105/jaqueta_adidas_corta_vento_season_masculino_preto_27269_1_573f294a90cd6b436ea1561b04bd690c.jpg", oldPrice: "349,90", newPrice: "279,90", discount: 20, installment: "27,99" },
        { title: "Mochila Antifurto para Notebook 15.6'' USB", imageUrl: "https://lojamarkryden.com.br/cdn/shop/files/75a8fea7692fc4cfbcbe0c8f08f94c76_800x.jpg?v=1708468560", oldPrice: "199,90", newPrice: "149,90", discount: 25, installment: "14,99" },
        { title: "Óculos de Sol Ray-Ban Aviador Clássico", imageUrl: "https://images.tcdn.com.br/img/img_prod/801617/ray_ban_rb3689_aviator_meta_ll_001_gf_arista_clear_gradiente_blue_original_8773_5_3d834916f5e84ae3884cd7511f885a55.jpg", oldPrice: "699,90", newPrice: "499,90", discount: 29, installment: "49,99" },
        { title: "Perfume Masculino Invictus Paco Rabanne 100ml", imageUrl: "https://a-static.mlcdn.com.br/800x560/perfume-invictus-paco-rabanne-100ml-masculino-original-lacrado-e-selo-adipec/roncostop/pr27/12b07082a41c52f9d95972db41331a6d.jpeg", oldPrice: "499,90", newPrice: "349,90", discount: 30, installment: "34,99" },
        { title: "Câmera Fotográfica Canon EOS Rebel T7", imageUrl: "https://emania.vteximg.com.br/arquivos/ids/210144", oldPrice: "2899,90", newPrice: "2399,90", discount: 17, installment: "239,99" },
        { title: "Liquidificador Oster Super Chef Inox 1400W", imageUrl: "https://m.media-amazon.com/images/I/51skkRRjdWL.jpg", oldPrice: "299,90", newPrice: "229,90", discount: 23, installment: "22,99" },
      ];

      cardsData.forEach((data) => {
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

      setupCarousel();
    })
    .catch((error) => console.error("Erro ao carregar os cards:", error));
}
