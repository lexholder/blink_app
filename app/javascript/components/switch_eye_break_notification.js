const switchButton = document.getElementById("switch-eye-break");
const active = document.getElementById("eye-break-notification-active");

const setSwitch = () => {
  switchButton.checked = active.innerText === "true";
};

const toggleActive = () => {
  if (active.innerText === "true"){
    active.innerText = "false";
  } else {
    active.innerText = "true";
  }
};

const switching = () => {
  switchButton.addEventListener('click',(event) =>{
    toggleActive();
  })
};

export { setSwitch, switching };
