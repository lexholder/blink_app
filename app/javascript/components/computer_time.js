const updateOnHTML = () => {
  return true;
};


const computerTime = () => {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      console.log('+1');
      fetch("/computer_times/update_one_min", {
        method: "PATCH"
      })
      // .then(() => {
      //   updateOnHTML();
      // })
    }, 60000);
  });
};

export { computerTime };
