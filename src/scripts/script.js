const navMenu = document.querySelector('.navigator-menu');
const navBtn = document.querySelector('.btn-icon');
const icon = document.querySelector('.btn-icon i');

navBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  icon.classList.toggle('fa-x');
  icon.classList.toggle('fa-bars');
});

function wppSubmit(event) {
  event.preventDefault();

  const name = document.querySelector('#formName')
  const message = document.querySelector('#formMessage')
  const phone = '5575988277958';

  const text = `Olá! Me chamo ${name}, ${message}`;
  const formatText = encodeURIComponent(text);

  const url = `https://wa.me/${phone}/?text=${formatText}`;

  window.open(url, '_blank');
}

//Lib Swiper Controls
var swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});