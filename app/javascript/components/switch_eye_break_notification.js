const switchButton = document.getElementById("switch-eye-break");
const active = document.getElementById("eye-break-notification-active");

const toggleActive = () => {
  if (active.innerText === "true"){
    active.innerText = "false";
  } else {
    active.innerText = "true";
  }
};

const switching = () => {
  switchButton.addEventListener('click',(event) =>{
    fetch("/settings/toggle_eye_break_notification", {
      method: "PATCH"
    })
    .then(() => {
      toggleActive();
    })
  })
};

export { switching };
