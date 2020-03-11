const suggestions = ["Do your favorite leg and back stretches.", "Drink water.",
                      "Take a bathroom break.", "Look out the window.", "Close your eyes and take deep breaths.",
                      "Close your eyes and count your breaths.", "Take a micronap.",
                      "Refill your coffee or tea cup.",  "Take a lap around the office.",
                      "Chat with a co-worker.", "Jot down your to-do list.",
                      "Jot down something fun you'd like to do this weekend.",
                      "Jot down a few goals you can achieve this month.",
                      "Get a snack.", "Call a friend to say hi.", "Call someone that you love.",
                      "Tidy up your desk.", "Declutter your desk.", "Daydream about your next vacation.",
                      "Daydream about where your career might take you two, five, even 10 years from now.",
                      "Just close your eyes and do NOTHING.",
                      "Take out a notepad and pen and write whatever is in your mind: your feelings, your plans for the week-end, your thoughts on climate change...",
                      "Listen to your favorite song.", "Head to the supply closet and pick out a few new office supplies.","Think about what you are grateful for."];

const title = '1-minute eye break from your computer';

const optionsForNotification = (randomIndex) => {
  const options = {
    tag: 'eye-break',
    renotify: true,
    silent: true,
    requireInteraction: true,
    body: `${suggestions[randomIndex]}\n\nClick to get another suggestion for your 1-minute break!`
  };
  return options;
};

const shuffleSuggestionOnClick = (notification, randomIndex) => {
  notification.addEventListener('click', (event) => {
    let newRandomIndex = randomIndex;
    while (newRandomIndex === randomIndex) {
      newRandomIndex = Math.floor(Math.random() * suggestions.length);
    }
    pushNotification(newRandomIndex);
  });
};

const pushNotification = (randomIndex) => {
  const options = optionsForNotification(randomIndex);
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(title, options);
    shuffleSuggestionOnClick(notification, randomIndex);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(title, options);
        shuffleSuggestionOnClick(notification, randomIndex);
      }
    });
  }
};

const eyeBreakNotifications = () => {
  const active = document.getElementById("eye-break-notification-active");
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      if (active.innerText === "true") {
        const randomIndex = Math.floor(Math.random() * suggestions.length);
        pushNotification(randomIndex);
      }
    }, 1200000);
    // }, 10000);
  });
};

const pushNotificationDemo = () => {
  const options = optionsForNotification(9);
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification(title, options);
    notification.addEventListener('click', (event) => {
      pushNotification(0);
    });
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification(title, options);
        notification.addEventListener('click', (event) => {
          pushNotification(0);
        });
      }
    });
  }
}

const eyeBreakNotificationsDemo = () => {
  const switchButton = document.getElementById("switch-eye-break");
  const active = document.getElementById("eye-break-notification-active");
  switchButton.addEventListener("click", () => {
    setTimeout(() => {
      if (active.innerText === "true") {
        pushNotificationDemo();
      }
    }, 10000);
  });
};


export { eyeBreakNotifications, eyeBreakNotificationsDemo };
