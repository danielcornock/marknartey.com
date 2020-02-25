let activePublication = 'books';

const publicationSwitch = () => {
  const buttons = document.querySelectorAll('.publications-navItem');

  if (!buttons) return;

  if (document.querySelector('.accolades')) {
    activePublication = 'scholarships';
  }

  buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
      document.querySelector(`#${activePublication}`).classList.remove('is-active');

      button.classList.add('is-active');

      document.querySelector(`#${button.id}-list`).classList.remove('hidden');
      document.querySelector(`#${activePublication}-list`).classList.add('hidden');

      activePublication = button.id;
    })
  );
};

const openMobileNav = () => {
  const navButton = document.querySelector('.hamburger-container');
  const mobileMenu = document.querySelector('.mobile-nav-container');

  navButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav-container--active');
  });
};

openMobileNav();

publicationSwitch();
