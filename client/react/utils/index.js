export const hideModal = () => {
  const body = document.getElementsByTagName('body')[0];
  const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
  body.classList.remove('modal-open');
  body.removeChild(modalBackdrop);
};
