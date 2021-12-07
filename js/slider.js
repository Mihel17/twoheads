const promo = document.querySelector('.promo');
const controlersContainer = promo.querySelector('.promo__slider-controlers');
const slides = promo.querySelector('.promo__slider').children;

const changeSlide = (evt) => {
  if (evt.target.dataset.number) {
    // controllers
    const clickedController = evt.target;
    const controlers = document.querySelectorAll('.promo__slider-controler')
    for (const item of controlers) {
      item.classList.remove('promo__slider-controler--active')
    }
    clickedController.classList.add('promo__slider-controler--active')
    // slides
    const numberActiveSlide = Number(clickedController.dataset.number)
    const activeSlide = slides[numberActiveSlide - 1]
    for (const item of slides) {
      item.classList.remove('promo__slide--active')
    }
    activeSlide.classList.add('promo__slide--active')
  }
}
controlersContainer.addEventListener('click', changeSlide)