const { renderHeader } = require("./ui");
const { JSDOM } = require("jsdom");

beforeEach(() => {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  global.document = dom.window.document;
});

test("fragile test – direct selector", () => {
  renderHeader("User");
  const h1 = document.querySelector("h1");
  expect(h1.textContent).toBe("Hello User"); // fragile if structure changes
});

test("robust test – using regex", () => {
  renderHeader("User");
  const h1 = document.querySelector("h1");
  expect(h1.textContent).toMatch(/Hello/i); // more robust
});
