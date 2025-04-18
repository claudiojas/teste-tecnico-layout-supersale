export default function handleBoxMenuMMobile (showOverlay) {
    const containerBoxMenu = document.querySelector(".container__box__menu__mobile")

    showOverlay === 'block' ? containerBoxMenu.style.display = 'block' : containerBoxMenu.style.display = 'none';
}