/* JavaScript code */
function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);

const blobCursor = (() => {  
  const cursor = document.querySelector('#cursorBlob');
  const links = document.querySelectorAll('.nav__link');
  const setCursorPos = (e) => {
    const { pageX: posX, pageY: posY } = e;
    cursor.style.top = `${posY - (cursor.offsetHeight / 2)}px`;
    cursor.style.left = `${posX - (cursor.offsetWidth / 2)}px`;
  };
  document.addEventListener('mousemove', setCursorPos);
  
  const setCursorHover = () => cursor.style.transform = 'scale(2.5)';
  const removeCursorHover = () => cursor.style.transform = '';
  links.forEach(link => link.addEventListener('mouseover', setCursorHover));
  links.forEach(link => link.addEventListener('mouseleave', removeCursorHover));  
})();
