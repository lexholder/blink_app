const playButtons = document.querySelectorAll(".play-btn");

const setPlayButton = (button, audio) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList.contains('playing')){
      event.currentTarget.classList.remove('playing');
      event.currentTarget.innerHTML = "Paused";
      audio.pause();
    } else {
      if (window.audio && window.audio != audio){
        window.audio.pause();
        window.audio.currentTime = 0;
        playButtons.forEach((button) => {
          button.classList.remove('playing');
          button.innerHTML = "Play";
        })
      }
      window.audio = audio;
      event.currentTarget.classList.add('playing');
      event.currentTarget.innerHTML = "Playing";
      audio.play();
    }
  });
};

const setplayButtons = () => {
  if (playButtons){
    playButtons.forEach((button) => {
      const audio = new Audio(button.dataset.sound);
      setPlayButton(button, audio);
    });
  }
};

const fillInModalContent = (title, directions, duration) => {
  document.getElementById("title-in-modal").innerText = title;
  let directionListHTML = "";
  directions.split("/").forEach( direction => {
    directionListHTML = directionListHTML + `<li>${direction}</li>`
  });
  document.getElementById("directions-list-in-modal").innerHTML = directionListHTML;
  const timer = document.getElementById('timer');
  if (timer){
    timer.dataset.duration = duration;
    timer.innerText = "Start timer";
    timer.classList.remove("disabled");
  }
  if (window.intervalForRunningExercise){
    clearInterval(window.intervalForRunningExercise);
  };
};

const setModalExercises = () => {
  const openModalButtons = document.querySelectorAll('.open-btn-modal');
  if (openModalButtons){
    openModalButtons.forEach((openModalButton) => {
      openModalButton.addEventListener('click', (event) => {
        const title = event.currentTarget.dataset.title;
        const directions = event.currentTarget.dataset.directions;
        const duration = event.currentTarget.dataset.duration;
        fillInModalContent(title, directions, duration);
        const playButtonModalDiv = document.getElementById('play-btn-modal-div');
        if (playButtonModalDiv) {
          const playButtonInPage = document.getElementById(event.currentTarget.dataset.playid);
          playButtonModalDiv.innerHTML = playButtonInPage.outerHTML;
          const playButtonModal = playButtonModalDiv.firstChild;
          let audio = new Audio(playButtonModal.dataset.sound);
          if (playButtonModal.classList.contains('playing')){
            audio = window.audio;
          }
          setPlayButton(playButtonModal, audio);
        }
      })
    })
  }
};


const fillInModalMorningExercise = (title, directions, duration) => {
  fillInModalContent(title, directions, duration);
  document.getElementById('timer').classList.add("morning");
};

const fillInModalNightExercise = (title, directions, duration) => {
  fillInModalContent(title, directions, duration);
  document.getElementById('timer').classList.add("night");
};



export { setplayButtons, setModalExercises, fillInModalMorningExercise, fillInModalNightExercise };
