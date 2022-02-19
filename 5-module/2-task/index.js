function toggleText() {
  // ваш код...
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  
  btn.addEventListener('click', () => {
    if (!text.hasAttribute('hidden')) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  });
}
