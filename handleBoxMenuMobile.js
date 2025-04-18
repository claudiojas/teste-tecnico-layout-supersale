export default function handleBoxMenuMMobile (showOverlay) {
    const boxMenuMobile = document.querySelector('.container__box__menu__mobile');

    showOverlay === 'block' ? 
        boxMenuMobile.classList.add('open')
        :
        boxMenuMobile.classList.remove('open');
}