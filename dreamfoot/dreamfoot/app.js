
ScrollReveal().reveal('.hero-detail', { delay: 250 });

var slideUp = {
    distance: '150%',
    origin: 'left',
    opacity: null
};

ScrollReveal().reveal('.hero-detail', slideUp);


ScrollReveal().reveal('.hero-img', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.hero-img', slideUp);

ScrollReveal().reveal('.success-detail', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'top',
    opacity: null
};

ScrollReveal().reveal('.success-detail', slideUp);

ScrollReveal().reveal('.container', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.container', slideUp);

ScrollReveal().reveal('.contact-detail', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'left',
    opacity: null
};

ScrollReveal().reveal('.contact-detail', slideUp);

ScrollReveal().reveal('.form', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.form', slideUp);


ScrollReveal().reveal('.cards-container', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.cards-container', slideUp);


ScrollReveal().reveal('.Features', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

ScrollReveal().reveal('.Features', slideUp);

ScrollReveal().reveal('.Founders', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'left',
    opacity: null
};

ScrollReveal().reveal('.new-content', slideUp);


ScrollReveal().reveal('.Founders', { delay: 450 });

var slideUp = {
    distance: '150%',
    origin: 'left',
    opacity: null
};

ScrollReveal().reveal('new-content', slideUp);

// slider
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex +1) % slides.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

//crousel






