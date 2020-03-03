const switchButton = document.getElementById("switch-eye-break");

const setSwitch = () => {
  const active = document.getElementById("eye-break-notification-active");
  console.log(active);
  switchButton.checked = active.innerText === "true";
}

export { setSwitch };
