const findActiveOrders = (order) =>
  order.orders.filter((elem) => !elem.isCompleted);

const findPastOrders = (orders) =>
  orders.filter((elem) => elem.isCompleted);

export { findActiveOrders, findPastOrders };
