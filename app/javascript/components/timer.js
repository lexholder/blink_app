const timer = document.getElementById('timer');

const timesUp = () => {
  timer.classList.remove("disabled");
  timer.classList.add("clickable");
  if (timer.classList.contains("morning")){
    fetch("/routines/complete_morning_routine", {
      method: "PATCH"
    })
    .then(() => {
      document.getElementById('completed-morning').innerText = "true";
    })
  } else if (timer.classList.contains("night")){
    fetch("/routines/complete_night_routine", {
      method: "PATCH"
    })
    .then(() => {
      document.getElementById('completed-night').innerText = "true";
    })
  }
};

const stopTimer = (timeInterval) => {
  clearInterval(timeInterval);
}

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
      timesUp();
    } else if (timeRemaining === -5) {
      stopTimer(timeinterval);
      timer.innerHTML = `Restart the timer`;
    }
    timeRemaining = timeRemaining - 1;
  },1000);
  window.intervalForRunningExercise = timeinterval;
};

const exerciseTimer = () => {
  if (timer){
    timer.addEventListener('click', (event) => {
      setTimer(timer.dataset.duration);
    });
  }
};

export { exerciseTimer };
