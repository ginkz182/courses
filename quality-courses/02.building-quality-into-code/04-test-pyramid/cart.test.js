const { calculateCartTotal, saveCart } = require("./cart");

// UNIT TEST
test("calculateCartTotal sums items correctly", () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
  ];
  expect(calculateCartTotal(items)).toBe(35);
});

// INTEGRATION TEST (mock db)
test("saveCart calls dbClient.save", async () => {
  const fakeDb = { save: jest.fn().mockResolvedValue(true) };
  const cart = [{ price: 10, quantity: 2 }];
  const result = await saveCart(cart, fakeDb);
  expect(fakeDb.save).toHaveBeenCalledWith(cart);
  expect(result).toBe(true);
});

// E2E (simulate user flow, simple)
test("E2E: calculate and save cart", async () => {
  const cart = [
    { price: 2, quantity: 3 },
    { price: 4, quantity: 1 },
  ];
  const fakeDb = { save: jest.fn().mockResolvedValue(true) };
  const total = calculateCartTotal(cart);
  const saved = await saveCart(cart, fakeDb);
  expect(total).toBe(10);
  expect(saved).toBe(true);
});
