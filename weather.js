async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b0fcff3e0c4de5af0d5d4694adfac114";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    
    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡 Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherHtml;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
  }
}
