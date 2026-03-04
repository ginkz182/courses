const { getWeatherGood } = require("./good_example");

test("getWeatherGood formats temperature", async () => {
  const fakeClient = {
    fetchWeather: async (city) => ({ temp: 28 }),
  };
  const res = await getWeatherGood(fakeClient, "Bangkok");
  expect(res).toBe("Bangkok: 28°C");
});
