const fillInModalExercise = (title, summary, directions, duration) => {
  document.getElementById("title-in-modal").innerText = title;
  document.getElementById("summary-in-modal").innerText = summary;
  let directionListHTML = "";
  directions.split("/").forEach( direction => {
    directionListHTML = directionListHTML + `<li>${direction}</li>`
  });
  document.getElementById("directions-list-in-modal").innerHTML = directionListHTML;
  document.getElementById('timer').dataset.duration = duration;
};

const fillInModalResource = (title, content) => {
  document.getElementById("resource-title-in-modal").innerHTML = title;
  document.getElementById("resource-content-in-modal").innerHTML = content;
};

export { fillInModalExercise, fillInModalResource };
