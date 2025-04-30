const apiUrl = "https://weather.tsukumijima.net/api/forecast/city/130010"; 

const cityElement = document.getElementById("city");
const weatherElement = document.getElementById("weather");
const dateElement = document.getElementById("date");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const city = data.title; // 地域名
    const date = data.forecasts[0].date;
    const todayWeather = data.forecasts[0].telop; // 今日の天気

    cityElement.textContent = "地域: " + city;
    dateElement.textContent = "日付:" + date;
    weatherElement.textContent = "今日の天気: " + todayWeather;
  })
  .catch(error => {
    console.error("エラーが発生しました:", error);
  });
