const switchMorningButton = document.getElementById("switch-morning");
const switchNightButton = document.getElementById("switch-night");
const morningActive = document.getElementById("morning-notification-active");
const nightActive = document.getElementById("night-notification-active");

const setRoutineSwitches = () => {
  if (switchMorningButton) {
    switchMorningButton.checked = morningActive.innerText === "true";
  }
  if (switchNightButton){
    switchNightButton.checked = nightActive.innerText === "true";
  }
};


const toggleMorningActive = () => {
  if (morningActive.innerText === "true"){
    morningActive.innerText = "false";
  } else {
    morningActive.innerText = "true";
  }
};

const toggleNightActive = () => {
  if (nightActive.innerText === "true"){
    nightActive.innerText = "false";
  } else {
    nightActive.innerText = "true";
  }
};

const switchingRoutine = () => {
  if (switchMorningButton){
    switchMorningButton.addEventListener('click',(event) =>{
      fetch("/settings/toggle_morning_notification", {
        method: "PATCH"
      })
      .then(() => {
        toggleMorningActive();
      })
    })
  }
  if (switchNightButton){
    switchNightButton.addEventListener('click',(event) =>{
      fetch("/settings/toggle_night_notification", {
        method: "PATCH"
      })
      .then(() => {
        toggleNightActive();
      })
    })
  }
};

export { setRoutineSwitches, switchingRoutine };
