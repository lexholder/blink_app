const timer = document.getElementById('timer');

const setTimer = (duration) => {
  timer.classList.add("disabled");
  timer.classList.remove("clickable");
  let timeRemaining = duration;
  const timeinterval = setInterval(() => {
    if (timeRemaining >= 0){
      const minutesRemaining = Math.floor(timeRemaining / 60);
      const secondsRemaining = timeRemaining % 60;
      let stringForMinutes = minutesRemaining;
      if (minutesRemaining === 0){
        stringForMinutes = '';
      }
      let stringForSeconds = secondsRemaining;
      if (secondsRemaining<10){
        stringForSeconds = `0${secondsRemaining}`;
      }
      timer.innerHTML = `<span id="minutes">${stringForMinutes}</span>:<span class="seconds">${stringForSeconds}</span>`;
    } else if (timeRemaining === -1) {
      timer.classList.remove("disabled");
      timer.classList.add("clickable");
    } else if (timeRemaining === -5) {
      clearInterval(timeinterval);
      timer.classList.remove("disabled");
      timer.classList.add("clickable");
      timer.innerHTML = `Restart the timer`;
    }
    timeRemaining = timeRemaining - 1;
  },1000);
};

const exerciseTimer = () => {
  timer.addEventListener('click', (event) => {
    setTimer(timer.dataset.duration);
  });
};

export { exerciseTimer };
