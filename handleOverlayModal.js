export default function handleOverlayModal (showModal = true) {
    const isMobile = window.innerWidth <= 1170;
    const overlay = document.querySelector(isMobile ? '.overlay__modal__search--mobile' : '.overlay__modal__search');

    !showModal ? overlay.style.display = 'none' : overlay.style.display = 'block';

    const stateOverlay = window.getComputedStyle(overlay);

    return stateOverlay.display;
}