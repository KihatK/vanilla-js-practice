const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let order = 1;

function nextSlide() {
    const currentSlide = document.querySelector(`.slide-${order}`);
    currentSlide.classList.remove('current');
    let nextSlide = document.querySelector(`.slide-${++order}`);
    if (nextSlide) {
        nextSlide.classList.add('current');
    }
    else {
        order = 1;
        nextSlide = document.querySelector(`.slide-${order}`);
        nextSlide.classList.add('current');
    }
}

function prevSlide() {
    const currentSlide = document.querySelector(`.slide-${order}`);
    currentSlide.classList.remove('current');
    let prevSlide = document.querySelector(`.slide-${--order}`);
    if (prevSlide) {
        prevSlide.classList.add('current');
    }
    else {
        order = 3;
        prevSlide = document.querySelector(`.slide-${order}`);
        prevSlide.classList.add('current');
    }
}