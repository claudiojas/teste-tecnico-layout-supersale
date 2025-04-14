export default function acordionFunction () {
    const containers = document.querySelectorAll('.footer__container__nav');
  
    containers.forEach(container => {
      const icon = container.querySelector('.footer__accordion img');
      const content = container.querySelector('.nenu__accordion');
  
      icon.addEventListener('click', () => {
        content.classList.toggle('active');
        icon.classList.toggle('rotated');
      });
    });
  }
  