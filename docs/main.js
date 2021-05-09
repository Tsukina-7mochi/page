import "./style.scss";

import addListener from './clickImage.js';

window.addEventListener('load', () => {
  document.querySelectorAll('.illustrations img').forEach((el) => {
    addListener(el);
  });

  document.querySelectorAll('.toggleLang').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelector('main').dataset.lang = el.dataset.set;
    });
  });
});