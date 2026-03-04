// Good: dependency injected, no side effects
async function getWeatherGood(apiClient, city) {
  const data = await apiClient.fetchWeather(city);
  return `${city}: ${data.temp}°C`;
}

module.exports = { getWeatherGood };
