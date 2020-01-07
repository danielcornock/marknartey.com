let activePublication = 'journal';

const publicationSwitch = () => {
  const buttons = document.querySelectorAll('.publications-navItem');
  if (!buttons) return;

  buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
      document.querySelector(`#${activePublication}`).classList.remove('is-active');

      button.classList.add('is-active');
      const list = document.querySelector(`#${button.id}-list`);
      const oldList = document.querySelector(`#${activePublication}-list`);

      list.classList.remove('hidden');
      oldList.classList.add('hidden');
      activePublication = button.id;
    })
  );
};

publicationSwitch();
