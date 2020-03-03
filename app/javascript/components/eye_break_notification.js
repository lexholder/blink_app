const title = 'Time to look away from your computer for a minute';
const options = {
  // icon: '/images/demos/icon-512x512.png',
  tag: 'eye-break',
  renotify: true,
  silent: true,
  requireInteraction: true,
  body: ''
};


const pushNotification = () => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(title, options);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(title, options);
      }
    });
  }
};

const eyeBreakNotifications = () => {
  const active = document.getElementById("eye-break-notification-active");
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      if (active.innerText === "true") {
        pushNotification();
      }
    }, 3000);
  });
};

export { eyeBreakNotifications };
