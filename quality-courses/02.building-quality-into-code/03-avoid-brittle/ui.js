function renderHeader(username) {
  const h1 = document.createElement("h1");
  h1.textContent = `Hello ${username}`;
  document.body.appendChild(h1);
  return h1;
}

module.exports = { renderHeader };
