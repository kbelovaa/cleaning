const findActiveOrders = (order, jobs) =>
  order.orders.filter((elem) => {
    const orderJob = jobs.find((job) => job.orderId._id === elem._id);
    if (orderJob) {
      return orderJob.status !== 'completed';
    }
  });

const findPastOrders = (orders, jobs) =>
  orders.filter((elem) => {
    const orderJob = jobs.find((job) => job.orderId._id === elem._id);
    if (orderJob) {
      return orderJob.status === 'completed';
    }
  });

export { findActiveOrders, findPastOrders };
