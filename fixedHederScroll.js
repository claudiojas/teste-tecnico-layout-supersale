export default function fixedScrollHeader () {
    const header =  document.querySelector(".header__contaiener");


    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('header-fixed')
        } else {
            header.classList.remove('header-fixed')
        }
      });
      
}