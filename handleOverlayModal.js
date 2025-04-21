export default function handleOverlayModal (showModal = true) {
    const isMobile = window.innerWidth <= 1170;
    const overlay = document.querySelector(isMobile ? '.overlay__modal__search--mobile' : '.overlay__modal__search');
    const modalSearch = document.querySelector(".container__search__modal");

    !showModal ? overlay.style.display = 'none' : overlay.style.display = 'block';

    showModal ? document.body.style.position = 'fixed' : document.body.style.position = ''

    const stateOverlay = window.getComputedStyle(overlay);

    return stateOverlay.display;
}