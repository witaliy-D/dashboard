let navBurger = document.querySelector('.header__toggle');
let nav = document.querySelector('.nav');
let close = document.querySelector('.nav__close');

navBurger.addEventListener('click', () => {
  nav.classList.add('nav--open');
});

nav.addEventListener('click', (e) => {
  if (nav.classList.contains('nav--open') && e.currentTarget === e.target) {
    nav.classList.remove('nav--open');
  }
});

close.addEventListener('click', () => {
  nav.classList.remove('nav--open');
});

//window.addEventListener('resize', () => {
//   if ( window.innerWidth > 768) {
//     nav.classList.remove('nav--open');
//   }
// });
