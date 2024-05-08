export const useBurger = () => {
  const burger = document.querySelector('[data-burger=burger]');
  const burgerMenu = document.querySelector('.header__right');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('.body');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    overlay.classList.toggle('overlay--visible');
    burgerMenu.classList.toggle('header__right--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay--visible');
    burgerMenu.classList.remove('header__right--visible');
    burger.classList.remove('burger--active');
    body.classList.remove('body--fixed');
  });
};
