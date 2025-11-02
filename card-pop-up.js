const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

const openModal = () => {
    document.body.classList.add('show-modal');
};

const closeModal = () => {
    document.body.classList.remove('show-modal');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('show-modal')) {
        closeModal();
    }
});