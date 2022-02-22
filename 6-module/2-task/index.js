import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.elem = this.createCard(product);
  }


  createCard(product) {
    let newProduct = createElement(`
    <div class="card">
    <div class="card__top">
        <img src="../../assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>
    `);
    
    newProduct.addEventListener('click', () => {

      const plusProduct = document.querySelector('.card__button');

      if (plusProduct) {
  
        const addProduct = new CustomEvent("product-add", {
          detail: product.id,
          bubbles: true
        });

        newProduct.dispatchEvent(addProduct);
      }


    });
    
    return newProduct;
  }
  
  
  // onClick(event) {
  //   const addProduct = document.querySelector('.card__button');

  //   if (addProduct) {
  //     console.log('click + ');

  //     console.log(event);

  //     // addProduct.addEventListener('click', () => {
  //     //   console.log('ololo');

  //     const addProduct = new CustomEvent("product-add", {
  //       detail: this.data.id,
  //       bubbles: true
  //     });

  //     addProduct.dispatchEvent(addProduct);
  //     // });
  //   }
  // }	


}
