const { getWeatherGood, calculateDiscount } = require("./good_example");

test("getWeatherGood formats temperature", async () => {
  const fakeClient = { fetchWeather: async () => ({ temp: 28 }) };
  const res = await getWeatherGood(fakeClient, "Bangkok");
  expect(res).toBe("Bangkok: 28°C");
});

test("calculateDiscount applies discount correctly", () => {
  expect(calculateDiscount(100, 0.1)).toBe(90);
  expect(calculateDiscount(200, 0.25)).toBe(150);
});

/**
 * Write additional tests for calculateDiscount edge cases (0%, 100%).
 * Add a new function calculateTax(price, taxRate) and write unit tests.
 * Run npm test to verify.
 */
