import hydrantingModalSearch from "./hydrantingModalSearch.js"

export default function searchReturn () {
    const searchInputs = document.querySelectorAll(".inpu__config__default__header");
    const searchIcons = document.querySelectorAll(".search__icon");

    let inputValue;

    searchInputs.forEach(input => {

        input.addEventListener('focus', () => {
            hydrantingModalSearch(inputValue, true);
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                hydrantingModalSearch(null, false);
            }, 150); // Pequeno delay para permitir clique no modal
        });

        input.addEventListener("input", (e) => {
            inputValue = e.target.value;
            hydrantingModalSearch(inputValue, true);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") alert(inputValue);
        });
    });

    searchIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (!inputValue?.trim()) return;
            alert(inputValue);
        });
    });
    
    
    document.querySelector('.overlay__modal__search').addEventListener('click', () => {
        hydrantingModalSearch(null, false);
    });
    


}
