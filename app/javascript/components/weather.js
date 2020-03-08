const key = "a2151ae0bc97d9937b6f405185f790ff";

const displayWeather = (data) => {
  document.getElementById("weather-temperature").innerText = `${Math.round(data.main.temp)}°C`;
  document.getElementById("weather-humidity").innerText = `${Math.round(data.main.humidity)}%`;
  document.getElementById("weather-description").innerText = data.weather[0].description;
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("weather-icon").src = iconURL;
};

const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
  fetch(url).then(response => response.json())
    .then(displayWeather);
}

const fetchWeatherEveryHour = () => {
  const board = document.getElementById("board");
  if (board){
    document.addEventListener("DOMContentLoaded", () => {
      const city = board.dataset.city;
      fetchWeather(city);
      setInterval(() => {
        fetchWeather(city);
      }, 3600000);
    });
  }
};


export { fetchWeatherEveryHour };
