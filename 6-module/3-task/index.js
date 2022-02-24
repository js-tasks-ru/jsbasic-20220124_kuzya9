import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.makeCarousel(slides);
  }


  makeCarousel(slides) {
    let carousel = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>
    `);

    let carouselInner = createElement(`
    <div class="carousel__inner"></div>
    `);

    carousel.appendChild(carouselInner);

    for (const slide of slides) {
      let newElem = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);
      carouselInner.appendChild(newElem);

      let button = carouselInner.querySelectorAll('button');
      button.forEach(item => {
        item.addEventListener('click', () => {

          const addProduct = new CustomEvent("product-add", {
            detail: slide.id,
            bubbles: true
          });
          item.dispatchEvent(addProduct);
        });
      });
    }



    let buttonLeft = carousel.querySelector('.carousel__arrow_left');
    let buttonRight = carousel.querySelector('.carousel__arrow_right');
    buttonLeft.style.display = 'none';
    let widthSlide = 0;

    buttonLeft.style.display = 'none';
    const arrLength = this.slides.length - 1;
    buttonLeft.onclick = function() {
      widthSlide--;
      carouselInner.style.transform = "translateX(-" + carouselInner.offsetWidth * widthSlide + "px)";
      widthSlide == 0 ? buttonLeft.style.display = 'none' : buttonRight.style.display = '';
    };

    buttonRight.onclick = function() {
      widthSlide++;
      carouselInner.style.transform = "translateX(-" + carouselInner.offsetWidth * widthSlide + "px)";
      widthSlide == arrLength ? buttonRight.style.display = 'none' : buttonLeft.style.display = '';
    };



    return carousel;
  }


}