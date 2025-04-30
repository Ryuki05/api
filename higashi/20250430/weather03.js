const cityElement = document.getElementById("city");
const dateElement = document.getElementById("date");
const weatherElement = document.getElementById("weather");
const citySelect = document.getElementById("citySelect");
const daySelect = document.getElementById("daySelect");
const windElement = document.getElementById("wind");
const temperatureElement = document.getElementById("temperature");



function fetchWeather(cityCode) {
  const apiUrl = `https://weather.tsukumijima.net/api/forecast/city/${cityCode}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const city = data.title;
      const date = data.forecasts[0].date;
      const wind = data.forecasts[0].detail.wind;
      const todayWeather = data.forecasts[0].telop;
      const temperature = data.forecasts[0].temperature.max.celsius;


      cityElement.textContent = "地域: " + city;
      dateElement.textContent = "日付:" + date;
      weatherElement.textContent = "今日の天気: " + todayWeather;
      windElement.textContent = "風向:" + wind;
      if(26<=temperature){
        temperatureElement.textContent = "最高気温:"+ temperature + "℃" +"熱中症に注意が必要です";
      }
      if(20<=temperature && 25>=temperature){
        temperatureElement.textContent = "最高気温:"+ temperature + "℃" +"暖かいです。";
      }
      if(15<=temperature && 19>=temperature){
        temperatureElement.textContent = "最高気温:"+ temperature + "℃" +"少し肌寒いかも";
      }
      if(14>=temperature){
        temperatureElement.textContent = "最高気温:"+ temperature + "℃" +"準備運動をしっかりしてけがに注意しましょう";
      }
      
    })
    .catch(error => {
      console.error("エラーが発生しました:", error);
    });
}

// 最初に大阪府の天気を表示
fetchWeather(citySelect.value,daySelect.value);

// 地域を選んだら天気情報を更新する
citySelect.addEventListener("change", () => {
  fetchWeather(citySelect.value,daySelect.value);
});
