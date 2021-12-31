export default function addListener(element){
  const modal = document.querySelector('#modal');
  const modalContent = modal.querySelector('section');

  element.addEventListener('click', () => {
    modalContent.childNodes.forEach((node) => {
      modalContent.removeChild(node);
    });
    modalContent.appendChild(element.cloneNode(false));

    const func = () => modal.classList.add('hidden');
    modal.addEventListener('click', () => {
      func();
      modal.removeEventListener('click', func);
    })
    modal.classList.remove('hidden');
  });
}