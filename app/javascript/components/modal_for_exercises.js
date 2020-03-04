
const fillInModal = (title, summary, directions) => {
  document.getElementById("title-in-modal").innerText = title;
  document.getElementById("summary-in-modal").innerText = summary;
  let directionListHTML = "";
  directions.split("/").forEach( direction => {
    directionListHTML = directionListHTML + `<li>${direction}</li>`
  });
  document.getElementById("directions-list-in-modal").innerHTML = directionListHTML;
};

export { fillInModal };
