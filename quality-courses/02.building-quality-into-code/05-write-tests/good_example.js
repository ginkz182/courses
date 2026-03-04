async function getWeatherGood(apiClient, city) {
  const data = await apiClient.fetchWeather(city);
  return `${city}: ${data.temp}°C`;
}

function calculateDiscount(price, rate) {
  return price * (1 - rate);
}

function calculateTax(price, taxRate) {
  // add function to calculate tax
}

module.exports = { getWeatherGood, calculateDiscount };
