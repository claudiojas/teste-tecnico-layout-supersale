export default function setupCarousel(containerCard, iconLeftClass, iconRigthClass) {
    const container = document.getElementById(`${containerCard}`);
    const arrowLeft = document.querySelector(`.${iconLeftClass}`);
    const arrowRight = document.querySelector(`.${iconRigthClass}`);

    const scrollAmount = 300;

    arrowLeft.addEventListener("click", () => {
        container.scrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
    });

    arrowRight.addEventListener("click", () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
    
        if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += scrollAmount;
        }
    }); 
}
