export default function setupCarousel() {
    const container = document.getElementById("cards-components");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-rigth");

    const containerInit = document.getElementById("cards-components-init");
    const arrowLeftInit = document.querySelector(".arrow-left-init");
    const arrowRightInit = document.querySelector(".arrow-rigth-init");

    const scrollAmount = 300;

    arrowLeft.addEventListener("click", () => {
        container.scrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
    });

    arrowLeftInit.addEventListener("click", () => {
        containerInit.scrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
    });


    arrowRight.addEventListener("click", () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
    
        if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += scrollAmount;
        }
    });

    arrowRightInit.addEventListener("click", () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
    
        if (containerInit.scrollLeft >= maxScroll) {
            containerInit.scrollLeft = 0;
        } else {
            containerInit.scrollLeft += scrollAmount;
        }
    });    
}
