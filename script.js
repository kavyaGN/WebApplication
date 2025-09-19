
const apiKey = 'c197d4209a6f959b201715d4bbc5187e';
function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');


  if (!city) {
    resultDiv.innerHTML = '<p>⚠️ Please enter a city name.</p>';
    return;
    const apiKey=""
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const url2=`https://api.openweathermap.org/data/2.5/forecast?q=mysore&appid=c197d4209a6f959b201715d4bbc5187e&units=metric`;

  resultDiv.innerHTML = '<p>⏳ Loading...</p>'; // <-- Add this line

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
        <p>☁️ Weather: ${data.weather[0].main}</p>
      `;
    })
    .catch(err => {
      resultDiv.innerHTML = `<p>❌ ${err.message}</p>`;
    });
}
