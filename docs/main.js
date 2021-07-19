import "./style.scss";

import addListener from './clickImage.js';

window.addEventListener('load', () => {
  document.querySelectorAll('.illustrations img').forEach((el) => {
    addListener(el);
  });
});