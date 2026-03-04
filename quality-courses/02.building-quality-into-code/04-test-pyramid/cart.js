// Simple cart logic
function calculateCartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

async function saveCart(cart, dbClient) {
  // pretend saving to DB
  return await dbClient.save(cart);
}

module.exports = { calculateCartTotal, saveCart };
