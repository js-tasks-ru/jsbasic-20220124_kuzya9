import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.createRibbon();
  }

  createRibbon() {
    let ribbon = createElement(`
    <div class="ribbon">

    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    `);

    for (let category of this.categories) {
      let elemCategory = createElement(`
      <a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>
      `);
      ribbon.querySelector('.ribbon__inner').appendChild(elemCategory);


      let ribbonItems = ribbon.querySelectorAll('.ribbon__item');
      ribbonItems.forEach(item => {
        item.addEventListener('click', (event) => {
          event.preventDefault();
          delClass();
          item.classList.add("ribbon__item_active");

          let addFromRibbon = new CustomEvent('ribbon-select', {
            detail: category.id,
            bubbles: true
          });
          
          item.dispatchEvent(addFromRibbon);
        });
      });
    }

    function delClass() {
      let ribbonItems = ribbon.querySelectorAll('.ribbon__item');
      ribbonItems.forEach(item => {
        item.classList.remove('ribbon__item_active');
      });
    }

    let ribbonInner = ribbon.querySelector('.ribbon__inner');
    let buttonLeft = ribbon.querySelector('.ribbon__arrow_left');
    let buttonRight = ribbon.querySelector('.ribbon__arrow_right');

    buttonLeft.onclick = function() {
      ribbonInner.scrollBy(-350, 0);
    };

    buttonRight.onclick = function() {
      ribbonInner.scrollBy(350, 0);
    };


    ribbonInner.addEventListener('scroll', function() {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      scrollRight == 0 ? buttonRight.classList.remove('ribbon__arrow_visible') : buttonRight.classList.add('ribbon__arrow_visible');
      scrollLeft == 0 ? buttonLeft.classList.remove('ribbon__arrow_visible') : buttonLeft.classList.add('ribbon__arrow_visible');
    });

    return ribbon;
  }


}
