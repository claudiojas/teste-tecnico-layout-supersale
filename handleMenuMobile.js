import handleOverlayModal from './handleOverlayModal.js';
import handleBoxMenuMMobile from './handleBoxMenuMobile.js';

export default function handleMenuMobile () {
    const overlay = document.querySelector('.overlay__modal__search--mobile');
    const iconMenuMobile = document.querySelector('.menu__mobile__icon');
   

    iconMenuMobile.addEventListener("click", () => {

        const stateOverlay = handleOverlayModal(true);
        handleBoxMenuMMobile(stateOverlay)

        console.log(stateOverlay);
    })

}