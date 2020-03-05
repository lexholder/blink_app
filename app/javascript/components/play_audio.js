const playButtons = document.querySelectorAll(".play-btn");

const setplayButtons = () => {
  if (playButtons){
    playButtons.forEach((button) => {
      const audio = new Audio(button.dataset.sound);
      button.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('playing')){
          event.currentTarget.classList.remove('playing');
          event.currentTarget.innerHTML = "Paused";
          audio.pause();
        } else {
          event.currentTarget.classList.add('playing');
          event.currentTarget.innerHTML = "Playing";
          audio.play();
        }
      });
    });
  }
};

export { setplayButtons };
