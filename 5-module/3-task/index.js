function initCarousel() {
  // ваш код...
  let inner = document.querySelector('.carousel__inner');
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let transformChange = inner.offsetWidth;
  let count = 1;
  let transform = 0;
  let countSlides = inner.children.length;
  left.style.display = 'none';
  

  right.onclick = function() {
    transform += transformChange;
    count += 1;
    inner.style.transform = `translateX(-${transform}px)`;
    left.style.display = '';
    if (count === countSlides) {
      right.style.display = 'none';
    }
  };

  left.onclick = function() {
    transform -= transformChange;
    count -= 1;
    inner.style.transform = `translateX(-${transform}px)`;
    right.style.display = '';
    if (count === 1) {
      left.style.display = 'none';
    }
  };

}

