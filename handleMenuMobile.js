import handleOverlayModal from './handleOverlayModal.js';
import handleBoxMenuMMobile from './handleBoxMenuMobile.js';

export default function handleMenuMobile () {
    const iconBtnClose = document.querySelector('.btn__close');
    const iconMenuMobile = document.querySelector('.menu__mobile__icon');
    const boxMenuMobile = document.querySelector('.container__box__menu__mobile');
   

    iconMenuMobile.addEventListener("click", () => {

        const stateOverlay = handleOverlayModal(true);
        handleBoxMenuMMobile(stateOverlay);
    })


    iconBtnClose.addEventListener('click', () => {
        const stateOverlay = handleOverlayModal(false);
        handleBoxMenuMMobile(stateOverlay);
    })
}