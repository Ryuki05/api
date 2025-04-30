const apiUrl = "https://weather.tsukumijima.net/api/forecast/city/130010"; 

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const city = data.title; // 地域名
    const todayWeather = data.forecasts[0].telop; // 今日の天気
    // 課題：理解できた人は明日の天気を取得して表示

    console.log("地域:", city);
    console.log("今日の天気:", todayWeather);
  })
  .catch(error => {
    console.error("エラーが発生しました:", error);
  });
