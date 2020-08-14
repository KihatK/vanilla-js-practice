const openBtn = document.querySelector('.open-button');
const closeBtn = document.querySelector('.close-button');
const modalBackground = document.querySelector('.modal-background');
const modalWrapper = document.querySelector('.modal-wrapper');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);

function openModal() {
    modalWrapper.classList.remove('hidden');
}

function closeModal() {
    modalWrapper.classList.add('hidden');
}