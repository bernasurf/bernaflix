const infoBtn = document.querySelector('#infoBtn');
const streamBtn = document.querySelector('#streamBtn');
const modalBg = document.querySelector('#infoModalBg');
const streamModalBg = document.querySelector('#streamModalBg');
const modalClose = document.querySelector('#closeInfoBtn');
const streamModalClose = document.querySelector('#closeStreamBtn');

infoBtn.addEventListener('click', () => {
    
    modalBg.classList.add('modal-bg-active');
})

streamBtn.addEventListener('click', () => {
    
    streamModalBg.classList.add('modal-bg-active');
})

modalClose.addEventListener('click', () => {
    
    modalBg.classList.remove('modal-bg-active');
})

streamModalClose.addEventListener('click', () => {
    
    streamModalBg.classList.remove('modal-bg-active');
})
