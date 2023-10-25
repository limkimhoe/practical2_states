const paymentStates = [
  "Initiation",
  "Authorization",
  "Processing",
  "Complete",
  "Failure",
  "Refunded",
];

// Initial state for each payment
const initialPaymentState = {
  state: "Initiation",
  retryCount: 0,
};

// Simulated payment data in different states
const payments = [
  { id: "P1", ...initialPaymentState },
  { id: "P2", state: "Authorization", retryCount: 1 },
  { id: "P3", state: "Processing", retryCount: 2 },
  { id: "P4", state: "Complete" },
];

function simulatePaymentFailure(payment) {
  if (
    payment.state === "Initiation" ||
    payment.state === "Authorization" ||
    payment.state === "Processing"
  ) {
    // Transition to the "Failure" state
    payment.state = "Failure";
    payment.retryCount = 0; // Reset the retry count
    console.log(`Payment ${payment.id} failed. State: ${payment.state}`);
  } else {
    console.error(
      `Payment ${payment.id} cannot fail in the current state: ${payment.state}`
    );
  }
}

function simulatePaymentRefund(payment) {
  if (payment.state === "Complete") {
    // Transition to the "Refunded" state
    payment.state = "Refunded";
    console.log(
      `Payment ${payment.id} has been refunded. State: ${payment.state}`
    );
  } else {
    console.error(
      `Payment ${payment.id} cannot be refunded in the current state: ${payment.state}`
    );
  }
}

function simulateBankProcessing(payment) {
  if (payment.state === "Authorization") {
    // Transition to the "Processing" state
    payment.state = "Processing";
    console.log(
      `Bank is processing payment ${payment.id}. State: ${payment.state}`
    );
  } else {
    console.error(
      `Bank cannot process payment ${payment.id} in the current state: ${payment.state}`
    );
  }
}

// Simulate payment failures for all payments
// payments.forEach((payment) => simulatePaymentFailure(payment));

// Simulate payments and refunds
// payments.forEach((payment) => {
//   if (payment.state === "Complete") {
//     simulatePaymentRefund(payment);
//   } else {
//     console.log(
//       `Payment ${payment.id} is in state: ${payment.state}. Refund not possible.`
//     );
//   }
// });

// Simulate bank processing for payments
payments.forEach((payment) => {
  if (payment.state === "Authorization") {
    simulateBankProcessing(payment);
  } else {
    console.log(
      `Payment ${payment.id} is in state: ${payment.state}. Bank processing not possible.`
    );
  }
});
