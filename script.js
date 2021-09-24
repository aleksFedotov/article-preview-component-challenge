const share = document.querySelector('.share');
const popup = document.querySelector('.popup');

share.addEventListener('click', () => {
  popup.classList.toggle('active');
  share.classList.toggle('active');
});
