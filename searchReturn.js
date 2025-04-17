import hydrantingModalSearch from "./hydrantingModalSearch.js"

export default function searchReturn () {
    const isMobile = window.innerWidth <= 1170;

    const searchInputs = document.querySelectorAll(".inpu__config__default__header");

    let inputValue;

    searchInputs.forEach(input => {

        input.addEventListener('focus', () => {
            hydrantingModalSearch(inputValue, true);
        });

        input.addEventListener("input", (e) => {
            inputValue = e.target.value;
            hydrantingModalSearch(inputValue, true);
        });

    });
    
    
    document.querySelector(isMobile ? 'overlay__modal__search--mobile' : '.overlay__modal__search').addEventListener('click', () => {
        const input = document.querySelector(isMobile ? '.inpu__config__default__header' : '.input__search__header');

        hydrantingModalSearch(null, false);
        input.value = '';
        inputValue = '';
    });
};