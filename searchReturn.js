import hydrantingModalSearch from "./hydrantingModalSearch.js";
import handleBoxMenuMobile from './handleBoxMenuMobile.js';
import handleOverlayModal from './handleOverlayModal.js';

export default function searchReturn () {
    const isMobile = window.innerWidth <= 1170;

    const searchInputs = document.querySelectorAll(isMobile ? '.inpu__config__default__header' : '.input__search__header');
    const searchIcon = document.querySelector(".search__icon");

    let inputValue;

    searchInputs.forEach(input => {

        input.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {
                e.preventDefault(); 
                searchIcon.click();
            };

            if (e.key === "Escape") {
                e.preventDefault(); 
                input.value = '';
                inputValue = '';
                hydrantingModalSearch(null, false);
                handleOverlayModal(false);
                input.blur();
            };
        });

        searchIcon.addEventListener("click", ()=> {
            if(inputValue === undefined || inputValue === "") {
                 alert("Por favor, digite o que você procura! 👍");
                 input.focus();
                 return
            } else {
                alert(`Aqui o sistema redirecionaria para produros relacionados a "${inputValue}"`);

                input.value = '';
                inputValue = '';
                hydrantingModalSearch(null, false);
                handleOverlayModal(false);

            }
        });

        input.addEventListener('focus', () => {
            handleOverlayModal(true);
            
        });

        input.addEventListener('blur', () => {
            handleOverlayModal(false);
            
        });

        input.addEventListener("input", (e) => {
            inputValue = e.target.value;
            hydrantingModalSearch(inputValue, true);
        });

       
    });

    
    document.querySelector(isMobile ? '.overlay__modal__search--mobile' : '.overlay__modal__search').addEventListener('click', () => {
        const input = document.querySelector(isMobile ? '.input__search__header--mobile' : '.input__search__header');
        const overlay = document.querySelector('.overlay__modal__search--mobile ');

        hydrantingModalSearch(null, false);
        handleBoxMenuMobile('none');
        overlay.style.backgroundColor = "transparent";
        document.body.style.position = '';

        input.value = '';
        inputValue = '';
    });
};


function detectedEnterOrEsc () {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            console.log("Enter pressionado!");
            // Sua lógica para o Enter
        } else if (e.key === "Escape") {
            console.log("Escape pressionado!");
            // Sua lógica para o Esc
        }
    });
}