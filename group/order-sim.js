const orderStates = [
  "Order received",
  "Packing",
  "Waiting for pick up",
  "Delivering",
  "Delivered",
  "Delivery failed",
  "Cancelled",
  "Rejected",
];

// Simulated order data with different initial states
const orders = [
  { id: "order1", state: "Order received" },
  { id: "order2", state: "Packing" },
  { id: "order3", state: "Delivering" },
  { id: "order4", state: "Waiting for pick up" },
  { id: "order5", state: "Delivered" },
  { id: "order6", state: "Delivery failed" },
  { id: "order7", state: "Cancelled" },
  { id: "order8", state: "Rejected" },
];

function simulateDeliveryFailed(order) {
  if (order.state === "Delivering") {
    // Transition to the "Delivery failed" state
    order.state = "Delivery failed";
    console.log(
      `Order ${order.id} has experienced a delivery failure. State: ${order.state}`
    );
  } else {
    console.error(
      `Order ${order.id} cannot experience a delivery failure in the current state: ${order.state}`
    );
  }
}

function simulateOrderRejection(order) {
  if (order.state === "Order received") {
    // Transition to the "Rejected" state
    order.state = "Rejected";
    console.log(`Order ${order.id} has been rejected. State: ${order.state}`);
  } else {
    console.error(
      `Order ${order.id} cannot be rejected in the current state: ${order.state}`
    );
  }
}

function simulateCourierDelivering(order) {
  if (order.state === "Waiting for pick up" || order.state === "Delivering") {
    // Transition to the "Delivering" state
    order.state = "Delivering";
    console.log(
      `Courier is delivering order ${order.id}. State: ${order.state}`
    );
  } else {
    console.error(
      `Order ${order.id} cannot be in the delivering state in the current state: ${order.state}`
    );
  }
}

function simulateOrderCancellation(order) {
  if (
    order.state !== "Delivered" &&
    order.state !== "Delivery failed" &&
    order.state !== "Rejected" &&
    order.state !== "Cancelled"
  ) {
    // Transition to the "Cancelled" state
    order.state = "Cancelled";
    console.log(
      `Order ${order.id} has been cancelled by the buyer. State: ${order.state}`
    );
  } else {
    console.error(
      `Order ${order.id} cannot be cancelled in the current state: ${order.state}`
    );
  }
}

// Simulate delivery failure for orders
// orders.forEach((order) => {
//   if (order.state === "Delivering") {
//     simulateDeliveryFailed(order);
//   } else {
//     console.log(
//       `Order ${order.id} is in state: ${order.state}. Delivery failure not possible.`
//     );
//   }
// });

// Simulate order rejection for orders by seller
// orders.forEach((order) => {
//   if (order.state === "Order received") {
//     simulateOrderRejection(order);
//   } else {
//     console.log(
//       `Order ${order.id} is in state: ${order.state}. Rejection not possible.`
//     );
//   }
// });

// Simulate courier delivering for orders
// orders.forEach((order) => {
//   if (order.state === "Waiting for pick up") {
//     simulateCourierDelivering(order);
//   } else {
//     console.log(
//       `Order ${order.id} is in state: ${order.state}. Courier delivery not possible.`
//     );
//   }
// });

// Simulate order cancellation for orders
orders.forEach((order) => {
  if (
    order.state !== "Delivered" &&
    order.state !== "Delivery failed" &&
    order.state !== "Rejected" &&
    order.state !== "Cancelled"
  ) {
    simulateOrderCancellation(order);
  } else {
    console.log(
      `Order ${order.id} is in state: ${order.state}. Cancellation not possible.`
    );
  }
});
