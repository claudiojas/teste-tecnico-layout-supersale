import handleOverlayModal from './handleOverlayModal.js';
import handleBoxMenuMMobile from './handleBoxMenuMobile.js';

export default function handleMenuMobile () {
    const iconBtnClose = document.querySelector('.btn__close');
    const iconMenuMobile = document.querySelector('.menu__mobile__icon');
    const overlay = document.querySelector('.overlay__modal__search--mobile ');
   

    iconMenuMobile.addEventListener("click", () => {

        const stateOverlay = handleOverlayModal(true);
        handleBoxMenuMMobile(stateOverlay);

        overlay.style.backgroundColor = "#000000d3";
    })


    iconBtnClose.addEventListener('click', () => {
        const stateOverlay = handleOverlayModal(false);
        handleBoxMenuMMobile(stateOverlay);
        overlay.style.backgroundColor = "transparent";
    })
}