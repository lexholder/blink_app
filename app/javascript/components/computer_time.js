const updateOnHTML() = => {

};


const computerTime = () => {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      fetch("", {
        method: "PATCH"
      })
      .then(() => {
        updateOnHTML();
      })
    }, 1000);
  });
};

export { computerTime };
