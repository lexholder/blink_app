function openTabs(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Stop and restart all audio
  if (window.audio) {
    const playButtons = document.querySelectorAll(".page__play-btn");
    window.audio.pause();
    window.audio.currentTime = 0;
    playButtons.forEach((playButton) => {
      playButton.classList.remove('paused');
      playButton.classList.remove('playing');
      playButton.innerHTML = "<i class='fas fa-play-circle'></i>";
    })
  }

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('active');
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-blink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

export { openTabs };
