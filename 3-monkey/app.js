const openFace = document.querySelector('.open');
const closedFace = document.querySelector('.closed');
const normalFace = document.querySelector('.normal');
const closedMouth = document.querySelector('.mouth');

closedFace.addEventListener('click', () => {
    openFace.classList.add('active')
    closedFace.classList.remove('active')
});

openFace.addEventListener('click', () => {
    closedMouth.classList.add('active')
    openFace.classList.remove('active')
});

normalFace.addEventListener('click', () => {
    closedFace.classList.add('active')
    normalFace.classList.remove('active')
});

closedMouth.addEventListener('click', () => {
    normalFace.classList.add('active')
    closedMouth.classList.remove('active')
});
