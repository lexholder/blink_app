const updateOnHTML = () => {
  const computerTime = document.getElementById("computer-time");
  const nbMinTot = Number.parseInt(computerTime.dataset.computerTimeMinutes, 10) + 1;
  computerTime.dataset.computerTimeMinutes = nbMinTot;
  const nbHrs = Math.floor(nbMinTot / 60);
  const nbMin = nbMinTot % 60;
  let hrsText = "";
  if (!(nbHrs === 0 && nbMin != 0)){
    hrsText = `${nbHrs}h`;
  }
  let minText = "";
  if (nbMin < 10 && nbMin != 0){
    minText = "0";
  }
  minText = minText + `${nbMin}`;
  if (nbHrs === 0){
    minText = minText + "min";
  }
  const hrs = document.getElementById('computer-time-hrs');
  const min = document.getElementById('computer-time-min');
  hrs.innerText = hrsText;
  min.innerText = minText;
};

const computerTime = () => {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      fetch("/computer_times/update_one_min", {
        method: "PATCH"
      })
      .then(() => {
        updateOnHTML();
      })
    }, 60000);
  });
};

export { computerTime };
