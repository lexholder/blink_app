const displayWeather = (data) => {
  document.getElementById("weather-temperature").innerText = `${Math.round(data.main.temp)}`;
  document.getElementById("weather-humidity").innerText = `${Math.round(data.main.humidity)}`;
  document.getElementById("weather-description").innerText = data.weather[0].description.toUpperCase();
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("weather-icon").src = iconURL;
};


const fetchWeatherEveryHour = () => {
  const board = document.getElementById("board");
  if (board){
    document.addEventListener("DOMContentLoaded", () => {
      fetch('/fetch_weather')
      .then( response => response.json())
      .then(displayWeather);
      setInterval(() => {
        fetch('/fetch_weather')
        .then( response => response.json())
        .then(displayWeather);
      }, 3600000);
    });
  }
};


export { fetchWeatherEveryHour };
