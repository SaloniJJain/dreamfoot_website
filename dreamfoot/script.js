document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    const leftSection = document.querySelector('.left-section');
    const rightSection = document.querySelector('.right-section');
  
    window.addEventListener('scroll', () => {
      const triggerBottom = window.innerHeight / 5 * 4;
  
      const leftSectionTop = leftSection.getBoundingClientRect().top;
      const rightSectionTop = rightSection.getBoundingClientRect().top;
  
      if (leftSectionTop < triggerBottom) {
        leftSection.classList.add('scroll-animate');
      }
  
      if (rightSectionTop < triggerBottom) {
        rightSection.classList.add('scroll-animate');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
  
    serviceItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
      });
  
      item.addEventListener('mouseout', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power1.out' });
      });
    });
  });

  let currentIndex = 0;
  const reviews = document.querySelectorAll('.review');
  const totalReviews = reviews.length;
  
  document.getElementById('next').addEventListener('click', () => {
    reviews[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalReviews;
    reviews[currentIndex].style.display = 'block';
  });
  
  document.getElementById('prev').addEventListener('click', () => {
    reviews[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
    reviews[currentIndex].style.display = 'block';
  });
  
function toggleAnswer(id) {
  var answer = document.getElementById(id + '-answer');
  var sign = document.getElementById(id + '-sign');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    sign.textContent = '+';
  } else {
    answer.style.display = 'block';
    sign.textContent = '−';
  }
}


document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});
