const applicationStates = [
  "Application submitted",
  "Reviewing",
  "Arranging interview",
  "Waiting for interview",
  "Interviewing",
  "Selection",
  "Offer",
  "Acceptance",
  "Rejected",
];

// Simulated job application data with different initial states
const applications = [
  { id: "A1", state: "Application submitted" },
  { id: "A2", state: "Reviewing" },
  { id: "A3", state: "Arranging interview" },
  { id: "A4", state: "Waiting for interview" },
  { id: "A5", state: "Interviewing" },
  { id: "A6", state: "Selection" },
  { id: "A7", state: "Offer" },
  { id: "A8", state: "Acceptance" },
  { id: "A9", state: "Rejected" },
];

function simulateWaitingForInterview(application) {
  if (application.state === "Arranging interview") {
    // Transition to the "Waiting for interview" state
    application.state = "Waiting for interview";
    console.log(
      `Applicant for job application ${application.id} is now waiting for the interview. State: ${application.state}`
    );
  } else {
    console.error(
      `Job application ${application.id} cannot be in the "Waiting for interview" state in the current state: ${application.state}`
    );
  }
}

function simulateSelection(application) {
  if (
    application.state === "Reviewing" ||
    application.state === "Interviewing"
  ) {
    // Transition to the "Selection" state
    application.state = "Selection";
    console.log(
      `Recruiter is now ready to select applicants for job application ${application.id}. State: ${application.state}`
    );
  } else {
    console.error(
      `Job application ${application.id} cannot enter the "Selection" state in the current state: ${application.state}`
    );
  }
}

function simulateArrangingInterview(application) {
  if (
    application.state === "Reviewing" ||
    application.state === "Waiting for interview"
  ) {
    // Transition to the "Arranging interview" state
    console.log(
      `Recruiter is now arranging an interview for job application ${application.id}. State: ${application.state}`
    );
    application.state = "Arranging interview";
  } else {
    console.error(
      `Job application ${application.id} cannot enter the "Arranging interview" state in the current state: ${application.state}`
    );
  }
}

// Simulate applicants waiting for interview
// applications.forEach((application) => {
//   if (application.state === "Arranging interview") {
//     simulateWaitingForInterview(application);
//   } else {
//     console.log(
//       `Job application ${application.id} is in state: ${application.state}. Waiting for interview not possible.`
//     );
//   }
// });

// Simulate applicants ready for selection
// applications.forEach((application) => {
//   if (application.state === "Interviewing") {
//     simulateSelection(application);
//   } else {
//     console.log(
//       `Job application ${application.id} is in state: ${application.state}. Selection not possible.`
//     );
//   }
// });

// Simulate applicants in "Arranging interview" state
applications.forEach((application) => {
  simulateArrangingInterview(application);
});
