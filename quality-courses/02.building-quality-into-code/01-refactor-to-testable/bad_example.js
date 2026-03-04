// Bad: tightly coupled to fetch and alert side-effects
const fetch = require("node-fetch");

async function getWeatherBad(city) {
  const res = await fetch(`https://api.weather.example/${city}`);
  const data = await res.json();
  // side effect: logging / UI
  console.log(`${city}: ${data.temp}°C`);
  return `${city}: ${data.temp}°C`;
}

module.exports = { getWeatherBad };
